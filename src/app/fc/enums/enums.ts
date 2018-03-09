export enum flowChart {
  IPA = 'IN_PLATFORM_ACTION',
  OOPA = 'OUT_OF_PLATFORM_ACTIVITY',
  STARTPOINT = 'START_POINT',
  ENDPOINT = 'END_POINT'
}

export enum actionTypeDashed {
  OMIT = 'Omit',
  VIEW = 'View',
  READ = 'Read',
  CHECK = 'Check',
}

export enum actionType {
  OMIT = 'Omit',
  VIEW = 'View',
  READ = 'Read',
  CHECK = 'Check',
  CLICK = 'Click',
  HOVER = 'Hover',
  DROPDOWNMENU = 'Drop-down menu',
  TYPE = 'Type',
  TAP = 'Tap',
  SCAN = 'Scan',
}

export enum painPointType {
  IRRELEVANT = 'IRRELEVANT',
  DISCOMFORT = 'DISCOMFORT',
  DISRUPTIVE = 'DISRUPTIVE',
}

export enum stepType {
  BUTTON = 'Button',
  TEXT_LINK = 'Text Link',
  INFORMATION = 'Information/Text',
  DROPDOWN_LIST = 'Dropdown List',
  CHECKBOX = 'Checkbox',
  TEXT_BOX = 'Text box',
  TEXT_INPUT_FIELD = 'Text input field'
}

export enum actionOOPA {
  SMS = 'SMS',
  SMARTPHONE_APP = 'Smartphone App',
  SMARTPHONE_APP_WITH_PASSWORD = 'Smartphone App with Password',
  TOKEN_DEVICE = 'Token Device',
  TOKEN_DEVICE_WITH_PASSWORD = 'Token Device with Password',
  TOKEN_DEVICE_WITH_CHALLENGE_RESPONSE = 'Token Device with Challenge Response',
  TOKEN_DEVICE_WITH_CHALLENGE_RESPONSE_PIN = 'Token Device with Challenge Response & PIN'
}
