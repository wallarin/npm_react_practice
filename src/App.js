import Movie from "./components/Movie";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router, // HashRouter도 존재한다 => URL에 localhost:3000/#/ 이렇게 출력된다.
  // 하지만 BrowserRouter는 localhost:3000/ 로 표현되기 때문에 대부분은 해당 컴포넌트를 사용한다.
  Switch,
  Route,
  Link // Browser의 새로고침 없이도 유저를 다른 페이지로 이동시키는 컴포넌트이다.
} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return ( 
    <Router> {/* //렌더링을 처리한다. */}
      <Switch> {/* 하나의 Route로만 렌더링하기 위해서이다.  */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
