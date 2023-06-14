const kv = await Deno.openKv();

const key = ["users", crypto.randomUUID()];
const value = { name: "Alice" };
await kv.set(key, value);

const result = await kv.get(key);
console.log(result.value);

// List out all entries with keys starting with `["users"]`
for await (const entry of kv.list({ prefix: ["users"] })) {
  console.log(entry.key);
  console.log(entry.value);
}
