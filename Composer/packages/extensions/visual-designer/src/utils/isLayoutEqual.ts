// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { isEqual } from 'lodash';

import { outlineObiJson } from './outlineObiJson';

export function isLayoutEqual(value, other) {
  const valueOutline = outlineObiJson(value);
  const otherOutline = outlineObiJson(other);
  return isEqual(valueOutline, otherOutline);
}
