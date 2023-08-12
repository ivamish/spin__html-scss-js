export async function getItem() {
    const response = await fetch('http://spin/spin');
  return await response.json();
}