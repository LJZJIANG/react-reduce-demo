function createStore(state, stateChanger) {
	console.log(123)
  const listeners = [];
  console.log(1212)
  debugger
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = action => {
    stateChanger(state, action);
    listeners.forEach(listener => listener());
  };
  return { getState, dispatch, subscribe };
}

function renderApp(appState) {
	console.log(123)
  renderTitle(appState.title);
  console.log(1212)
  renderContent(appState.content);
}

function renderTitle(title) {
  console.log(1212)
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
  console.log(123)
}

function renderContent(content) {
  console.log(1212)
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
  console.log(123)
}

let appState = {
  title: {
    text: 'React.js 小书',
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
