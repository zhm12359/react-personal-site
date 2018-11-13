import React, { PureComponent } from 'react';
import './App.less';
import { Modal } from 'antd';
import ModalContext from './context/ModalContext';

import Header from './component/Header';
import About from './component/About';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';

class App extends PureComponent {
  state = {
    loading: false,
    modalProperties: {
      content: <div />,
      visible: false
    }
  };

  setModalProperties = (properties) => {
    this.setState(prevState => (
      {
        modalProperties: {
          visible: prevState.visible,
          ...properties
        }
      }
    ));
  };

  hideModal = () => {
    this.setState(prevState => (
      {
        modalProperties: {
          visible: false,
          ...prevState.modalProperties
        }
      }
    ));
  };

  render() {
    const {
      state: { modalProperties, loading }, setModalProperties, hideModal
    } = this;
    const { content = <div />, title = null, footer = null, width = 1000 } = modalProperties;
    if (loading) {
      return (
        <div>
          loading
        </div>
      );
    }

    return (
      <div className="App">
        <ModalContext.Provider value={{ setModalProperties, modalProperties, hideModal }}>
          <Header />
          <About />
          <Resume />
          <Portfolio />
          <Modal visible={modalProperties.visible}
                 onCancel={hideModal}
                 width={width}
                 title={title}
                 footer={footer}
                 className="Modal">
            {content}
          </Modal>
        </ModalContext.Provider>
      </div>
    );
  }
}


export default App;
