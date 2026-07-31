import { pipeline } from '@xenova/transformers';
import { readFileSync, writeFileSync } from 'fs';

const MODEL = 'Xenova/all-MiniLM-L6-v2';
const BATCH_SIZE = 10;

// Extract PROPOSALS from the plain script file
const src = readFileSync('./proposals.js', 'utf8');
const PROPOSALS = Function(src + '; return PROPOSALS;')();

console.log(`Embedding ${PROPOSALS.length} proposals with ${MODEL}…`);

const embedder = await pipeline('feature-extraction', MODEL, { dtype: 'fp32' });
const embeddings = [];

for (let i = 0; i < PROPOSALS.length; i += BATCH_SIZE) {
  const batch = PROPOSALS.slice(i, i + BATCH_SIZE);
  const out = await embedder(batch.map(p => p.content), { pooling: 'mean', normalize: true });
  const dim = out.dims[out.dims.length - 1];
  for (let j = 0; j < batch.length; j++) {
    embeddings.push({
      id: batch[j].id,
      embedding: Array.from(out.data.slice(j * dim, (j + 1) * dim))
    });
  }
  console.log(`  ${Math.min(i + BATCH_SIZE, PROPOSALS.length)}/${PROPOSALS.length}`);
}

writeFileSync('./embeddings.json', JSON.stringify({ model: MODEL, embeddings }));
console.log(`Done → embeddings.json (${PROPOSALS.length} entries, dim ${embeddings[0].embedding.length})`);
