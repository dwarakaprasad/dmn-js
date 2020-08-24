
export default class DecisionHighlightEditorActions {

  constructor(editorActions, sheet, eventBus) {
    const actions = {
      highlightRules(context) {
        console.log('DecisionHighlightEditorActions ---> highlightRules ', context);
      }
    };
    editorActions.register(actions);

    this._eventBus = eventBus;
    this._eventBus.on('highlightRules', (event) => {
      editorActions.trigger('highlightRules', event);
    });

    // console.log(this._eventBus);
  }
}

DecisionHighlightEditorActions.$inject = [
  'editorActions',
  'sheet',
  'eventBus'
];