import { LineTo, SteppedLine } from '..';

export default class SteppedLineTo extends LineTo {
  render() {
    const points = this.detect();
    return points ? <SteppedLine {...points} {...this.props} /> : null;
  }
}
