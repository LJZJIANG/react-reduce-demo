function createStore(state, stateChanger) {
  const listeners1 = [];
  debugger
  const subscribe = listener => listeners1.push(listener);
  const getState = () => state;
  const dispatch = action => {
    stateChanger(state, action);
    listeners1.forEach(listener => listener());
  };
  return { getState, dispatch, subscribe };
}

function renderApp(appState) {
  renderTitle(appState.title);
  renderContent(appState.content);
}

function renderTitle(title1) {
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = title1.text;
  titleDOM.style.color = title1.color;
}

function renderContent(content) {
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}

let appState = {
  title: {
    text: 'React.js222 小书',
    color: 'red'
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
};

function stateChanger(state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text;
      break;
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color;
      break;
    default:
      break;
  }
}

const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState())); // 监听数据变化

renderApp(store.getState()); // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }); // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }); // 修改标题颜色
