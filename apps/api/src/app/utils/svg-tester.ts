import * as isSvg from 'is-svg';

export class SvgTester {
  public static isValidSvg(svgString: string): boolean {
    return isSvg(svgString);
  }
}
