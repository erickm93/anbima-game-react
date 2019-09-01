import React, { Component } from 'react';
import { Form, Radio } from 'antd';

class FormMarkup extends Component {
  render() {
    const {
      form: { getFieldDecorator },
      submitForm
    } = this.props;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <Form layout="vertical" onSubmit={submitForm}>
        <Form.Item label="O que é uma cota de fundo?">
          {getFieldDecorator('questionAnswer', {
            rules: [{ required: true, message: 'Selecione uma opção.' }]
          })(
            <Radio.Group>
              <Radio style={radioStyle} value={1}>Cota é a menor parte vendável de um fundo</Radio>
              <Radio style={radioStyle} value={2}>Cota é a maior parte vendável de um fundo</Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default FormMarkup;
