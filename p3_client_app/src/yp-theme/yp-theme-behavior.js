import '@polymer/polymer/polymer-legacy.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';

/**
 * @polymerBehavior Polymer.ypThemeBehavior
 */
export const ypThemeBehavior = {

  properties: {

    themes: {
      type: Array,
      value: function () { return [] }
    },

    fonts: {
      type: Array,
      value: function () { return [] }
    },

    selectedTheme: {
      type: Number,
      value: false
    },

    selectedFont: String
  },

  ready: function () {
    this.push('themes', {
      name: 'Reykjavík',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#103458',
      '--primary-color-100': '#3C6286',
      '--primary-color-200': '#3C6286',
      '--primary-color-300': '#234A6F',
      '--primary-color-400': '#234A6F',
      '--primary-color-600': '#234A6F',
      '--primary-color-700': '#234A6F',
      '--primary-color-800': '#103458',
      '--primary-color-900': '#3C6286',
      '--accent-color': 'var(--paper-orange-a700)',
      '--accent-color-100': 'var(--paper-orange-a100)',
      '--accent-color-200': 'var(--paper-orange-a200)',
      '--accent-color-300': 'var(--paper-orange-a400)',
      '--accent-color-400': 'var(--paper-orange-a700)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Basalt Gray',
        '--primary-background-color': '#f7f7f7',
      '--primary-color': 'var(--paper-blue-grey-500)',
      '--primary-color-100': 'var(--paper-blue-grey-100)',
      '--primary-color-200': 'var(--paper-blue-grey-200)',
      '--primary-color-300': 'var(--paper-blue-grey-300)',
      '--primary-color-400': 'var(--paper-blue-grey-400)',
      '--primary-color-600': 'var(--paper-blue-grey-600)',
      '--primary-color-700': 'var(--paper-blue-grey-700)',
      '--primary-color-800': 'var(--paper-blue-grey-800)',
      '--primary-color-900': 'var(--paper-blue-grey-900)',
      '--accent-color': 'var(--paper-orange-a700)',
      '--accent-color-100': 'var(--paper-orange-a100)',
      '--accent-color-200': 'var(--paper-orange-a200)',
      '--accent-color-300': 'var(--paper-orange-a300)',
      '--accent-color-400': 'var(--paper-orange-a400)',
      '--middle-color': 'var(--paper-blue-grey-600)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Green Moss',
      '--primary-background-color': 'var(--paper-light-green-100)',
      '--primary-color': 'var(--paper-light-green-900)',
      '--primary-color-100': 'var(--paper-light-green-100)',
      '--primary-color-200': 'var(--paper-light-green-200)',
      '--primary-color-300': 'var(--paper-light-green-300)',
      '--primary-color-400': 'var(--paper-light-green-400)',
      '--primary-color-600': 'var(--paper-light-green-600)',
      '--primary-color-700': 'var(--paper-light-green-700)',
      '--primary-color-800': 'var(--paper-light-green-800)',
      '--primary-color-900': 'var(--paper-light-green-900)',
      '--accent-color': 'var(--paper-pink-a700)',
      '--accent-color-100': 'var(--paper-pink-a100)',
      '--accent-color-200': 'var(--paper-pink-a200)',
      '--accent-color-300': 'var(--paper-pink-a300)',
      '--accent-color-400': 'var(--paper-pink-a400)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Google Blue',
      '--primary-background-color': 'var(--paper-blue-50)',
      '--primary-color': 'var(--paper-blue-500)',
      '--primary-color-200': 'var(--paper-blue-200)',
      '--primary-color-300': 'var(--paper-blue-300)',
      '--primary-color-400': 'var(--paper-blue-400)',
      '--primary-color-600': 'var(--paper-blue-600)',
      '--primary-color-700': 'var(--paper-blue-700)',
      '--primary-color-800': 'var(--paper-blue-800)',
      '--primary-color-900': 'var(--paper-blue-900)',
      '--accent-color': 'var(--paper-deep-orange-a400)',
      '--accent-color-100': 'var(--paper-deep-orange-a100)',
      '--accent-color-200': 'var(--paper-deep-orange-a200)',
      '--accent-color-300': 'var(--paper-deep-orange-a400)',
      '--accent-color-400': 'var(--paper-deep-orange-a400)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Red Rhubarb',
      '--primary-background-color': 'var(--paper-light-green-50)',
      '--primary-color':  'var(--paper-red-500)',
      '--primary-color-200': 'var(--paper-red-200)',
      '--primary-color-300': 'var(--paper-red-300)',
      '--primary-color-400': 'var(--paper-red-400)',
      '--primary-color-600': 'var(--paper-red-600)',
      '--primary-color-700': 'var(--paper-red-700)',
      '--primary-color-800': 'var(--paper-red-800)',
      '--primary-color-900': 'var(--paper-red-900)',
      '--accent-color': 'var(--paper-yellow-a700)',
      '--accent-color-100': 'var(--paper-yellow-a400)',
      '--accent-color-200': 'var(--paper-yellow-a400)',
      '--accent-color-300': 'var(--paper-yellow-a400)',
      '--accent-color-400': 'var(--paper-yellow-a700)',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Mountain Roses',
      '--primary-background-color': 'var(--paper-light-green-50)',
      '--primary-color':  'var(--paper-green-500)',
      '--primary-color-200': 'var(--paper-green-200)',
      '--primary-color-300': 'var(--paper-green-300)',
      '--primary-color-400': 'var(--paper-green-400)',
      '--primary-color-600': 'var(--paper-green-600)',
      '--primary-color-700': 'var(--paper-green-700)',
      '--primary-color-800': 'var(--paper-green-800)',
      '--primary-color-900': 'var(--paper-green-900)',
      '--accent-color': 'var(--paper-red-a700)',
      '--accent-color-100': 'var(--paper-red-a100)',
      '--accent-color-200': 'var(--paper-red-a200)',
      '--accent-color-300': 'var(--paper-red-a400)',
      '--accent-color-400': 'var(--paper-red-a700)',
      '--middle-color': 'var(--primary-background-color)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});


    this.push('themes', {
      name: 'Purple Wizards',
      '--primary-background-color': 'var(--paper-deep-purple-50)',
      '--primary-color':  'var(--paper-deep-purple-500)',
      '--primary-color-200': 'var(--paper-deep-purple-200)',
      '--primary-color-300': 'var(--paper-deep-purple-300)',
      '--primary-color-400': 'var(--paper-deep-purple-400)',
      '--primary-color-600': 'var(--paper-deep-purple-600)',
      '--primary-color-700': 'var(--paper-deep-purple-700)',
      '--primary-color-800': 'var(--paper-deep-purple-800)',
      '--primary-color-900': 'var(--paper-deep-purple-900)',
      '--accent-color': 'var(--paper-red-a700)',
      '--accent-color-100': 'var(--paper-red-a100)',
      '--accent-color-200': 'var(--paper-red-a200)',
      '--accent-color-300': 'var(--paper-red-a400)',
      '--accent-color-400': 'var(--paper-red-a700)',
      '--middle-color': 'var(--primary-background-color)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Kópavogur',
      '--primary-background-color': '#F0F0F0',
      '--primary-color': '#00853E',
      '--primary-color-200': '#30AD6A',
      '--primary-color-300': '##30AD6A',
      '--primary-color-400': '#08A651',
      '--primary-color-600': '#006C32',
      '--primary-color-700': '#004E24',
      '--primary-color-800': '#004E24',
      '--primary-color-900': '#004E24',
      '--accent-color': 'var(--paper-orange-a700)',
      '--accent-color-100': 'var(--paper-orange-a100)',
      '--accent-color-200': 'var(--paper-orange-a200)',
      '--accent-color-300': 'var(--paper-orange-a300)',
      '--accent-color-400': 'var(--paper-orange-a400)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Forbrukerrådet',
      '--primary-background-color': '#f5f5f5',
      '--primary-color': '#7dbdc9',
      '--primary-color-200': '#7dbdc9',
      '--primary-color-300': '#7dbdc9',
      '--primary-color-400': '#7dbdc9',
      '--primary-color-600': '#6497a1',
      '--primary-color-700': '#6497a1',
      '--primary-color-800': '#4b7179',
      '--primary-color-900': '#324c50',
      '--accent-color': '#d0672f',
      '--accent-color-100': 'var(--paper-orange-a100)',
      '--accent-color-200': 'var(--paper-orange-a200)',
      '--accent-color-300': 'var(--paper-orange-a300)',
      '--accent-color-400': 'var(--paper-orange-a400)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Forbrukerrådet Fonts',
      '--primary-background-color': '#f5f5f5',
      '--primary-color': '#7dbdc9',
      '--primary-color-200': '#7dbdc9',
      '--primary-color-300': '#7dbdc9',
      '--primary-color-400': '#7dbdc9',
      '--primary-color-600': '#6497a1',
      '--primary-color-700': '#6497a1',
      '--primary-color-800': '#4b7179',
      '--primary-color-900': '#324c50',
      '--accent-color': '#d0672f',
      '--accent-color-100': 'var(--paper-orange-a100)',
      '--accent-color-200': 'var(--paper-orange-a200)',
      '--accent-color-300': 'var(--paper-orange-a300)',
      '--accent-color-400': 'var(--paper-orange-a400)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', { htmlImport: "/styles/fonts/forbrukerradet-font.html", fontName: 'FFClanWebBook' });

    this.push('themes', {
      name: 'I choose Malta',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#001a4b',
      '--primary-color-200': '#000024',
      '--primary-color-300': '#000024',
      '--primary-color-400': '#001a4b',
      '--primary-color-600': '#001a4b',
      '--primary-color-700': '#001a4b',
      '--primary-color-800': '#001a4b',
      '--primary-color-900': '#001a4b',
      '--accent-color': '#d71920',
      '--accent-color-100': '#d71920',
      '--accent-color-200': '#d71920',
      '--accent-color-300': '#d71920',
      '--accent-color-400': '#d71920',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Reykjavík Blue',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#084F71',
      '--primary-color-100': '#084F71',
      '--primary-color-200': '#084F71',
      '--primary-color-300': '#084F71',
      '--primary-color-400': '#084F71',
      '--primary-color-600': '#084F71',
      '--primary-color-700': '#084F71',
      '--primary-color-800': '#084F71',
      '--primary-color-900': '#084F71',
      '--accent-color': 'var(--paper-orange-a700)',
      '--accent-color-100': 'var(--paper-orange-a100)',
      '--accent-color-200': 'var(--paper-orange-a200)',
      '--accent-color-300': 'var(--paper-orange-a400)',
      '--accent-color-400': 'var(--paper-orange-a700)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Unicorn 1',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#aa3319',
      '--primary-color-100': '#aa3319',
      '--primary-color-200': '#aa3319',
      '--primary-color-300': '#aa3319',
      '--primary-color-400': '#aa3319',
      '--primary-color-600': '#aa3319',
      '--primary-color-700': '#aa3319',
      '--primary-color-800': '#aa3319',
      '--primary-color-900': '#aa3319',
      '--accent-color': '#112e4c',
      '--accent-color-100': 'var(--paper-blue-a100)',
      '--accent-color-200': 'var(--paper-blue-a200)',
      '--accent-color-300': 'var(--paper-blue-a400)',
      '--accent-color-400': 'var(--paper-blue-a700)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Unicorn 2',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#282828',
      '--primary-color-100': '#282828',
      '--primary-color-200': '#282828',
      '--primary-color-300': '#282828',
      '--primary-color-400': '#282828',
      '--primary-color-600': '#282828',
      '--primary-color-700': '#282828',
      '--primary-color-800': '#282828',
      '--primary-color-900': '#282828',
      '--accent-color': '#aa3319',
      '--accent-color-100': '#aa3319',
      '--accent-color-200': '#aa3319',
      '--accent-color-300': '#aa3319',
      '--accent-color-400': '#aa3319',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Mount Air',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#0d3c55',
      '--primary-color-100': '#0d3c55',
      '--primary-color-200': '#0d3c55',
      '--primary-color-300': '#0d3c55',
      '--primary-color-400': '#0d3c55',
      '--primary-color-600': '#0d3c55',
      '--primary-color-700': '#0d3c55',
      '--primary-color-800': '#0d3c55',
      '--primary-color-900': '#0d3c55',
      '--accent-color': '#f16c20',
      '--accent-color-100': '#f16c20',
      '--accent-color-200': '#f16c20',
      '--accent-color-300': '#f16c20',
      '--accent-color-400': '#f16c20',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});


    this.push('themes', {
      name: 'Snjallborg',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#1e9ac8',
      '--primary-color-100': '#1e9ac8',
      '--primary-color-200': '#1e9ac8',
      '--primary-color-300': '#1e9ac8',
      '--primary-color-400': '#1e9ac8',
      '--primary-color-600': '#1e9ac8',
      '--primary-color-700': '#1e9ac8',
      '--primary-color-800': '#1e9ac8',
      '--primary-color-900': '#1e9ac8',
      '--accent-color': '#ee7aa2',
      '--accent-color-100': '#ee7aa2',
      '--accent-color-200': '#ee7aa2',
      '--accent-color-300': '#ee7aa2',
      '--accent-color-400': '#ee7aa2',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Black',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#282828',
      '--primary-color-100': '#282828',
      '--primary-color-200': '#282828',
      '--primary-color-300': '#282828',
      '--primary-color-400': '#282828',
      '--primary-color-600': '#282828',
      '--primary-color-700': '#282828',
      '--primary-color-800': '#282828',
      '--primary-color-900': '#282828',
      '--accent-color': 'var(--paper-orange-a700)',
      '--accent-color-100': 'var(--paper-orange-a100)',
      '--accent-color-200': 'var(--paper-orange-a200)',
      '--accent-color-300': 'var(--paper-orange-a400)',
      '--accent-color-400': 'var(--paper-orange-a700)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Nesið Okkar',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#525254',
      '--primary-color-100': '#525254',
      '--primary-color-200': '#525254',
      '--primary-color-300': '#525254',
      '--primary-color-400': '#525254',
      '--primary-color-600': '#525254',
      '--primary-color-700': '#525254',
      '--primary-color-800': '#525254',
      '--primary-color-900': '#525254',
      '--accent-color': '#e0701e',
      '--accent-color-100': '#e0701e',
      '--accent-color-200': '#e0701e',
      '--accent-color-300': '#e0701e',
      '--accent-color-400': '#e0701e',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});


    this.push('themes', {
      disabled: true,
      name: 'Snjallborg',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#1e9ac8',
      '--primary-color-100': '#1e9ac8',
      '--primary-color-200': '#1e9ac8',
      '--primary-color-300': '#1e9ac8',
      '--primary-color-400': '#1e9ac8',
      '--primary-color-600': '#1e9ac8',
      '--primary-color-700': '#1e9ac8',
      '--primary-color-800': '#1e9ac8',
      '--primary-color-900': '#1e9ac8',
      '--accent-color': '#ee7aa2',
      '--accent-color-100': 'var(--paper-blue-a100)',
      '--accent-color-200': 'var(--paper-blue-a200)',
      '--accent-color-300': 'var(--paper-blue-a400)',
      '--accent-color-400': 'var(--paper-blue-a700)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
        disabled: true,
        name: 'Black',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#282828',
      '--primary-color-100': '#282828',
      '--primary-color-200': '#282828',
      '--primary-color-300': '#282828',
      '--primary-color-400': '#282828',
      '--primary-color-600': '#282828',
      '--primary-color-700': '#282828',
      '--primary-color-800': '#282828',
      '--primary-color-900': '#282828',
      '--accent-color': 'var(--paper-orange-a700)',
      '--accent-color-100': 'var(--paper-blue-a100)',
      '--accent-color-200': 'var(--paper-blue-a200)',
      '--accent-color-300': 'var(--paper-blue-a400)',
      '--accent-color-400': 'var(--paper-blue-a700)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
        disabled: true,
        name: 'Nesið Okkar',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#525254',
      '--primary-color-100': '#525254',
      '--primary-color-200': '#525254',
      '--primary-color-300': '#525254',
      '--primary-color-400': '#525254',
      '--primary-color-600': '#525254',
      '--primary-color-700': '#525254',
      '--primary-color-800': '#525254',
      '--primary-color-900': '#525254',
      '--accent-color': '#e0701e',
      '--accent-color-100': 'var(--paper-blue-a100)',
      '--accent-color-200': 'var(--paper-blue-a200)',
      '--accent-color-300': 'var(--paper-blue-a400)',
      '--accent-color-400': 'var(--paper-blue-a700)',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Iceland',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#282828',
      '--primary-color-100': '#282828',
      '--primary-color-200': '#282828',
      '--primary-color-300': '#282828',
      '--primary-color-400': '#282828',
      '--primary-color-600': '#282828',
      '--primary-color-700': '#282828',
      '--primary-color-800': '#282828',
      '--primary-color-900': '#282828',
      '--accent-color': '#dc1e35',
      '--accent-color-100': '#dc1e35',
      '--accent-color-200': '#dc1e35',
      '--accent-color-300': '#dc1e35',
      '--accent-color-400': '#dc1e35',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Iceland 2',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#02529c',
      '--primary-color-100': '#02529c',
      '--primary-color-200': '#02529c',
      '--primary-color-300': '#02529c',
      '--primary-color-400': '#02529c',
      '--primary-color-600': '#02529c',
      '--primary-color-700': '#02529c',
      '--primary-color-800': '#02529c',
      '--primary-color-900': '#02529c',
      '--accent-color': '#dc1e35',
      '--accent-color-100': '#dc1e35',
      '--accent-color-200': '#dc1e35',
      '--accent-color-300': '#dc1e35',
      '--accent-color-400': '#dc1e35',
      '--middle-color': 'var(--primary-color-400)',
      '--icon-general-color': '#fff'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'The Westbourne',
      '--primary-background-color': 'var(--paper-light-green-50)',
      '--primary-color':  'var(--paper-red-500)',
      '--primary-color-200': 'var(--paper-red-200)',
      '--primary-color-300': 'var(--paper-red-300)',
      '--primary-color-400': 'var(--paper-red-400)',
      '--primary-color-600': 'var(--paper-red-600)',
      '--primary-color-700': 'var(--paper-red-700)',
      '--primary-color-800': 'var(--paper-red-800)',
      '--primary-color-900': 'var(--paper-red-900)',
      '--accent-color': '#fbba00',
      '--accent-color-100':  '#fbba00',
      '--accent-color-200':  '#fbba00',
      '--accent-color-300':  '#fbba00',
      '--accent-color-400': '#fbba00',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});


    this.push('themes', {
      name: 'Amsterdam',
      '--primary-background-color': 'var(--paper-blue-grey-100)',
      '--primary-color': '#164995',
      '--primary-color-200': '#164995',
      '--primary-color-300': '#164995',
      '--primary-color-400': '#164995',
      '--primary-color-600': '#164995',
      '--primary-color-700': '#164995',
      '--primary-color-800': '#164995',
      '--primary-color-900': '#164995',
      '--accent-color': '#ed1b24',
      '--accent-color-100':  '#ed1b24',
      '--accent-color-200':  '#ed1b24',
      '--accent-color-300':  '#ed1b24',
      '--accent-color-400': '#ed1b24',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'AS Roma',
      '--primary-background-color': '#DDDBDA',
      '--primary-color': '#970a2c',
      '--primary-color-200': '#970a2c',
      '--primary-color-300': '#970a2c',
      '--primary-color-400': '#970a2c',
      '--primary-color-600': '#970a2c',
      '--primary-color-700': '#970a2c',
      '--primary-color-800': '#970a2c',
      '--primary-color-900': '#970a2c',
      '--accent-color': '#fbba00',
      '--accent-color-100':  '#fbba00',
      '--accent-color-200':  '#fbba00',
      '--accent-color-300':  '#fbba00',
      '--accent-color-400': '#fbba00',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'AS Roma Inverted',
      '--primary-background-color': '#DDDBDA',
      '--primary-color': '#970a2c',
      '--primary-color-200': '#970a2c',
      '--primary-color-300': '#970a2c',
      '--primary-color-400': '#970a2c',
      '--primary-color-600': '#970a2c',
      '--primary-color-700': '#970a2c',
      '--primary-color-800': '#970a2c',
      '--primary-color-900': '#970a2c',
      '--accent-color': '#1D1D1B',
      '--accent-color-100':  '#1D1D1B',
      '--accent-color-200':  '#1D1D1B',
      '--accent-color-300':  '#1D1D1B',
      '--accent-color-400': '#1D1D1B',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'New Jersey',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#56920C',
      '--primary-color-200': '#56920C',
      '--primary-color-300': '#56920C',
      '--primary-color-400': '#56920C',
      '--primary-color-600': '#56920C',
      '--primary-color-700': '#56920C',
      '--primary-color-800': '#56920C',
      '--primary-color-900': '#56920C',
      '--accent-color': '#1880c7',
      '--accent-color-100':  '#1880c7',
      '--accent-color-200':  '#1880c7',
      '--accent-color-300':  '#1880c7',
      '--accent-color-400': '#1880c7',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'New Jersey Inverted',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#1880c7',
      '--primary-color-200': '#1880c7',
      '--primary-color-300': '#1880c7',
      '--primary-color-400': '#1880c7',
      '--primary-color-600': '#1880c7',
      '--primary-color-700': '#1880c7',
      '--primary-color-800': '#1880c7',
      '--primary-color-900': '#1880c7',
      '--accent-color': '#56920C',
      '--accent-color-100':  '#56920C',
      '--accent-color-200':  '#56920C',
      '--accent-color-300':  '#56920C',
      '--accent-color-400': '#56920C',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});

    this.push('themes', {
      name: 'Scottish Parliament',
      '--primary-background-color': '#f7f7f7',
      '--primary-color': '#500778',
      '--primary-color-200': '#500778',
      '--primary-color-300': '#500778',
      '--primary-color-400': '#500778',
      '--primary-color-600': '#500778',
      '--primary-color-700': '#500778',
      '--primary-color-800': '#500778',
      '--primary-color-900': '#500778',
      '--accent-color': '#E87722',
      '--accent-color-100':  '#E87722',
      '--accent-color-200':  '#E87722',
      '--accent-color-300':  '#E87722',
      '--accent-color-400': '#E87722',
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': 'var(--primary-background-color)'
    });
    this.push('fonts', {});
  },

  _setupOverrideTheme: function (primary, accent, background) {
    if (!background) {
      background =  'var(--paper-blue-grey-100)';
    }

    return {
      name: 'Override theme',
      '--primary-background-color': background,
      '--primary-color': primary,
      '--primary-color-200': primary,
      '--primary-color-300': primary,
      '--primary-color-400': primary,
      '--primary-color-600': primary,
      '--primary-color-700': primary,
      '--primary-color-800': primary,
      '--primary-color-900': primary,
      '--accent-color': accent,
      '--accent-color-100':  accent,
      '--accent-color-200':  accent,
      '--accent-color-300':  accent,
      '--accent-color-400': accent,
      '--middle-color': 'var(--primary-color-200)',
      '--icon-general-color': '#fff',
      'body': background
    }
  },

  setTheme: function (number, configuration) {
    if (configuration && configuration.themeOverrideColorPrimary &&
        configuration.themeOverrideColorPrimary.length>5 &&
        configuration.themeOverrideColorAccent &&
        configuration.themeOverrideColorAccent.length>5) {
      if (configuration.themeOverrideColorPrimary.length===6) {
        configuration.themeOverrideColorPrimary = "#"+configuration.themeOverrideColorPrimary;
      }
      if (configuration.themeOverrideColorAccent.length===6) {
        configuration.themeOverrideColorAccent = "#"+configuration.themeOverrideColorAccent;
      }
      if (configuration.themeOverrideBackgroundColor && configuration.themeOverrideBackgroundColor.length===6) {
        configuration.themeOverrideBackgroundColor = "#"+configuration.themeOverrideBackgroundColor;
      }

      updateStyles(this._setupOverrideTheme(configuration.themeOverrideColorPrimary, configuration.themeOverrideColorAccent, configuration.themeOverrideBackgroundColor))
    } else {
      if (this.themes[number]) {
        updateStyles(this.themes[number]);
      }
    }

    var defaultFontPath = "/styles/fonts/default-font.html";

    if (!this.selectedFont) {
      window.lastLoadedFont = this.selectedFont = defaultFontPath;
    }

    if (this.fonts[number]) {
      var fontHtmlImport = this.fonts[number].htmlImport;

      if (!this.fonts[number].htmlImport) {
        fontHtmlImport = defaultFontPath;
      }

      if (window.lastLoadedFont!=fontHtmlImport) {
        var randomNumber = Math.floor((Math.random() * 100000000) + 1);
        this.importHref(fontHtmlImport+ "?random="+randomNumber, function(e) {
          this.async(function () {
            window.lastLoadedFont = fontHtmlImport;
            console.log("I have loaded font");
          })
        }, function(e) {
          console.error("Could not load font file "+this.fonts[number]);
        }, true);
      } else {
        console.log("Not loading the same font "+window.lastLoadedFont);
      }
    }
  }
};
