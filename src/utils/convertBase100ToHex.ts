/**
 * @remarks
 * Value varies from 0 to 100.
 */
const convertBase100ToHex = (value: number) => {
  /**
   * Since hexadecimal values vary from 0-255 in decimal form, the base 100 value's
   * proportionate value is computed first.
   */
  const scaledValue = 255 * (value / 100);

  const valueFragments = scaledValue.toString(16).split('.');
  let hexValue = valueFragments[0].slice(0, 2);
  if (hexValue.length === 1) {
    hexValue = `0${hexValue}`;
  }

  return hexValue;
};

export default convertBase100ToHex;
