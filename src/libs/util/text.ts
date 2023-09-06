export const truncate = (str: string | null | undefined, n: number): string => {
  const validString = str ?? ''
  return validString.length > n ? `${validString.substring(0, n - 1)}...` : validString
}
