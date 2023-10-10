const BYTES_PER_MB = 1_048_576;
export const convertBytesToMb = (mb: number | undefined) => {
  if (!mb) {
    return 0;
  }

  return +(mb / BYTES_PER_MB).toPrecision(2);
}