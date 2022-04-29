// Definitions added to enable IDE autocomplete

import '@emotion/react';
import { Theme as AppTheme } from './index';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
