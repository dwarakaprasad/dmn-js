import ExpressionLanguagesModule from 'dmn-js-shared/lib/features/expression-languages';

import DecisionRules from './DecisionRules';
import DecisionHighlight from '../decision-highlight';

export default {
  __depends__: [
    ExpressionLanguagesModule,
    DecisionHighlight
  ],
  __init__: [ 'decisionRules' ],
  decisionRules: [ 'type', DecisionRules ]
};