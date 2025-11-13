import './App.css'
import {NavLink, Route, Routes} from "react-router";
import UseState from "./pages/UseState.jsx";
import UseEffect from "./pages/UseEffect.jsx";
import UseMemo from "./pages/UseMemo.jsx";
import UseRef from "./pages/UseRef.jsx";
import UseContext from "./pages/UseContext.jsx";
import UseReducer from "./pages/UseReducer.jsx";
import UseCallback from "./pages/UseCallback.jsx";
import CustomHook from "./pages/CustomHook.jsx";
import UseLayoutEffect from "./pages/UseLayoutEffect.jsx";
import UseTransition from "./pages/UseTransition.jsx";
import UseDeferredValue from "./pages/UseDeferredValue.jsx";
import UseImperativeHandle from "./pages/UseImperativeHandle.jsx";
import UseDebugValue from "./pages/UseDebugValue.jsx";
import UseId from "./pages/UseId.jsx";
import UseEffectEvent from "./pages/UseEffectEvent.jsx";
import Use from "./pages/Use.jsx";
import UseFormStatus from "./pages/UseFormStatus.jsx";
import UseOptimistic from "./pages/UseOptimistic.jsx";
import UseActionState from "./pages/UseActionState.jsx";
import Memo from "./pages/Memo.jsx";

function App() {
    return (
        <>
            <a href="https://react.dev/reference/react/hooks" target='_blank'><h1>React hooks</h1></a>
            <p className="read-the-docs">
                Click on the React link to learn more
            </p>
            <header style={{marginBottom: '2rem'}}>
                <nav>
                    <NavLink to="/" end>
                        useState
                    </NavLink>
                    <NavLink to="/useEffect" end>
                        useEffect
                    </NavLink>
                    <NavLink to="/useMemo" end>
                        useMemo
                    </NavLink>
                    <NavLink to="/useRef" end>
                        useRef
                    </NavLink>
                    <NavLink to="/useContext" end>
                        useContext
                    </NavLink>
                    <NavLink to="/useReducer" end>
                        useReducer
                    </NavLink>
                    <NavLink to="/useCallback" end>
                        useCallback
                    </NavLink>
                    <NavLink to="/customHook" end>
                        customHook
                    </NavLink>
                    <NavLink to="/useLayoutEffect" end>
                        useLayoutEffect
                    </NavLink>
                    <NavLink to="/useTransition" end>
                        useTransition
                    </NavLink>
                    <NavLink to="/useDeferredValue" end>
                        useDeferredValue
                    </NavLink>
                    <NavLink to="/useImperativeHandle" end>
                        useImperativeHandle
                    </NavLink>
                    <NavLink to="/useDebugValue" end>
                        useDebugValue
                    </NavLink>
                    <NavLink to="/useId" end>
                        useId
                    </NavLink>
                    <NavLink to="/useEffectEvent" end>
                        useEffectEvent
                    </NavLink>
                    <NavLink to="/use" end>
                        use
                    </NavLink>
                    <NavLink to="/useFormStatus" end>
                        useFormStatus
                    </NavLink>
                    <NavLink to="/useOptimistic" end>
                        useOptimistic
                    </NavLink>
                    <NavLink to="/useActionState" end>
                        useActionState
                    </NavLink>
                    <NavLink to="/memo" end>
                        react.memo
                    </NavLink>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<UseState/>}/>
                <Route path='/useEffect' element={<UseEffect/>}/>
                <Route path='/useMemo' element={<UseMemo/>}/>
                <Route path='/useRef' element={<UseRef/>}/>
                <Route path='/useContext' element={<UseContext/>}/>
                <Route path='/useReducer' element={<UseReducer/>}/>
                <Route path='/useCallback' element={<UseCallback/>}/>
                <Route path='/customHook' element={<CustomHook/>}/>
                <Route path='/useLayoutEffect' element={<UseLayoutEffect/>}/>
                <Route path='/useTransition' element={<UseTransition/>}/>
                <Route path='/useDeferredValue' element={<UseDeferredValue/>}/>
                <Route path='/useImperativeHandle' element={<UseImperativeHandle/>}/>
                <Route path='/useDebugValue' element={<UseDebugValue/>}/>
                <Route path='/useId' element={<UseId/>}/>
                <Route path='/useEffectEvent' element={<UseEffectEvent/>}/>
                <Route path='/use' element={<Use/>}/>
                <Route path='/useFormStatus' element={<UseFormStatus/>}/>
                <Route path='/useFormStatus' element={<UseFormStatus/>}/>
                <Route path='/useOptimistic' element={<UseOptimistic/>}/>
                <Route path='/useActionState' element={<UseActionState/>}/>
                <Route path='/memo' element={<Memo/>}/>
                {/*<Route path='*' element={<NotFound />} />*/}
            </Routes>
        </>
    )
}

export default App
