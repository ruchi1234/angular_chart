export const useCaseSteps = [
  {
    position: 0,
    category: 'START_POINT',
    startingPoint: 'HOME_PAGE',
    otherValues: {
      newPage: false
    }
  },
  {
    position: 1,
    category: 'IN_PLATFORM_ACTION',
    action: {
      type: 'OMIT',
      penaltyPoints: -5,
      characterCounter: 0,
      description: 'Omit Filters'
    },
    formType : {
      step: 'BUTTON',
      penaltyPoints: -10
    },
    painPoint: {
      type: null,
      reason: null,
      penaltyPoints: 0
    },
    otherValues: {
      verifiedField: false,
      newPage: false,
      securityStep: false,
      assistiveInformation: false,
      checkList: [],
      checkCounter: 0
    }
  },
  {
    position: 2,
    category: 'IN_PLATFORM_ACTION',
    action: {
      type: 'CLICK',
      penaltyPoints: -20,
      characterCounter: 0,
      description: 'Select Account'
    },
    formType : {
      step: 'TEXT_LINK',
      penaltyPoints: -10
    },
    painPoint: {
      type: null,
      reason: null,
      penaltyPoints: 0
    },
    otherValues: {
      verifiedField: false,
      newPage: true,
      securityStep: false,
      assistiveInformation: false,
      checkList: [],
      checkCounter: 0
    }
  },
  {
    position: 3,
    category: 'IN_PLATFORM_ACTION',
    action: {
      type: 'OMIT',
      penaltyPoints: -20,
      characterCounter: 0,
      description: 'Omit Other Products'
    },
    formType : {
      step: 'DROPDOWN_LIST',
      penaltyPoints: -10
    },
    painPoint: {
      type: 'IRRELEVANT',
      reason: 'IdOfTheChosenReason',
      penaltyPoints: -25
    },
    otherValues: {
      verifiedField: false,
      newPage: false,
      securityStep: false,
      assistiveInformation: false,
      checkList: [],
      checkCounter: 0
    }
  },
  {
    position: 4,
    category: 'IN_PLATFORM_ACTION',
    action: {
      type: 'CHECK',
      penaltyPoints: -25,
      characterCounter: 0,
      description: 'Check Transaction Details',
    },
    formType : {
      step: 'INFORMATION',
      penaltyPoints: -10
    },
    painPoint: {
      type: null,
      reason: null,
      penaltyPoints: 0
    },
    otherValues: {
      verifiedField: false,
      newPage: false,
      securityStep: false,
      assistiveInformation: true,
      checkList: ['Amount', 'Currency', 'Source Account', 'Beneficiary', 'Transaction Date'],
      checkCounter: 5
    }
  },
  {
    position: 5,
    category: 'OUT_OF_PLATFORM_ACTIVITY',
    action: {
      type: 'TOKEN_DEVICE_WITH_PASSWORD',
      penaltyPoints: -125,
      description: 'OTP via Token Device with Password'
    },
    painPoint: {
      type: null,
      reason: null,
      penaltyPoints: 0
    },
    otherValues: {
      passwordChallenge: 5,
      challengeResponse: 0,
      pinCharacters: 0,
      newPage: false
    }
  },
  {
    position: 6,
    category: 'IN_PLATFORM_ACTION',
    action: {
      type: 'TYPE',
      penaltyPoints: -44,
      characterCounter: 8,
      description: 'Enter Cell Number'
    },
    formType : {
      step: 'TEXT_BOX',
      penaltyPoints: -10
    },
    painPoint: {
      type: null,
      reason: null,
      penaltyPoints: 0
    },
    otherValues: {
      verifiedField: true,
      newPage: false,
      securityStep: false,
      assistiveInformation: false,
      checkList: [],
      checkCounter: 0
    }
  },
  {
    position: 7,
    category: 'END_POINT'
  }
];
