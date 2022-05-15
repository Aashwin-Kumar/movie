const useGener = (selectedGener) => {
  if (selectedGener.length < 1) return "";
  const generId = selectedGener.map((g) => g.id);
  return generId.reduce((ac, cr) => `${ac},${cr}`);
};
export default useGener;
