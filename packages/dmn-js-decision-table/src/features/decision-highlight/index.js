import EditorActions from 'table-js/lib/features/editor-actions';
import DecisionHighlightEditorActions from './DecisionHighlightEditorActions';

export default {
  __depends__: [
    EditorActions
  ],
  __init__: [ 'decisionHighlightActions' ],
  decisionHighlightActions: [ 'type', DecisionHighlightEditorActions ]
};