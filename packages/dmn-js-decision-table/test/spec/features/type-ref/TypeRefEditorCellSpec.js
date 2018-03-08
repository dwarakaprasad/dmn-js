import { bootstrapModeler, inject } from 'test/helper';

import { triggerChangeEvent, triggerClick } from 'dmn-js-shared/test/util/EventUtil';

import { query as domQuery } from 'min-dom';

import TestContainer from 'mocha-test-container-support';

import typeRefXML from './TypeRef.dmn';

import CoreModule from 'lib/core';
import DecisionTableHeadModule from 'lib/features/decision-table-head';
import ModelingModule from 'lib/features/modeling';
import TypeRefModule from 'lib/features/type-ref';


describe('features/type-ref', function() {

  beforeEach(bootstrapModeler(typeRefXML, {
    modules: [
      CoreModule,
      DecisionTableHeadModule,
      ModelingModule,
      TypeRefModule
    ]
  }));

  let testContainer;

  beforeEach(function() {
    testContainer = TestContainer.get(this);
  });


  it('should edit type ref', inject(function(elementRegistry) {

    // given
    const cell = domQuery('.type-ref', testContainer);

    triggerClick(cell);

    const select = domQuery('.type-ref-edit-select', testContainer);

    // when
    triggerChangeEvent(select, 'boolean');

    // then
    expect(
      elementRegistry.get('input1').businessObject.inputExpression.typeRef
    ).to.equal('boolean');
  }));

});