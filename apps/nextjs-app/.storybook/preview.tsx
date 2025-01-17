import { NextIntlClientProvider } from 'next-intl';

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { STORYBOOK_MODES, STORYBOOK_SIZES } from '@/.storybook/constants';
import type { Preview, ReactRenderer } from '@storybook/react';

import englishLocale from '@/i18n/locales/en.json';

import '../next.fonts';
import '../styles/index.css';

const preview: Preview = {
  parameters: {
    nextjs: { router: { basePath: '' }, appDirectory: true },
    chromatic: { modes: STORYBOOK_MODES },
    viewport: { defaultViewport: 'large', viewports: STORYBOOK_SIZES },
  },
  decorators: [
    Story => (
      <NextIntlClientProvider
        locale="en"
        timeZone="Etc/UTC"
        messages={englishLocale}
      >
          <Story />
      </NextIntlClientProvider>
    ),
    withThemeByDataAttribute<ReactRenderer>({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
