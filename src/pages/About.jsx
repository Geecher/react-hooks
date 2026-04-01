import CodeBlock from "../components/CodeBlock";

const About = () => {
    return (
        <div className="about">
            <h1>О React</h1>
            <p>Начнём с того, каким изначально был React.</p>
            <CodeBlock language="javascript" code={
`class About extends Component {
    // ========== ФАЗА МОНТИРОВАНИЯ (Mounting) ==========

    /**
     * constructor — вызывается до монтирования компонента.
     * Используется для инициализации state и привязки методов.
     * Важно: всегда вызывать super(props), если используете this.props в constructor.
     */
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            mountedAt: null,
            hasError: false,
        };
    }

    /**
     * getDerivedStateFromProps — вызывается перед каждым render (и при монтировании, и при обновлении).
     * Возвращает объект для обновления state или null, если ничего менять не нужно.
     * Редко используется: только когда state должен зависеть от изменений props.
     */
    static getDerivedStateFromProps(nextProps, prevState) {
    // Пример: если пришёл prop initialCount, синхронизируем с state при первом рендере
        if (nextProps.initialCount !== undefined && prevState.count === 0) {
            return {count: nextProps.initialCount };
        }
        return null;
    }

    /**
     * render — единственный обязательный метод. Должен быть «чистым» (без побочных эффектов).
     * Возвращает JSX, null или false. Вызывается при монтировании и при каждом обновлении.
     */
    render() {
        if (this.state.hasError) {
            return (
                <div className="about">
                    <h1>Что-то пошло не так</h1>
                    <p>Ошибка в дочернем компоненте. (getDerivedStateFromError + componentDidCatch)</p>
                </div>
                );
        }
        return (
            <div className="about">
                <h1>О React</h1>
                <p>Начнём с того, каким изначально был React.</p>
                <p>Счётчик (демо жизненного цикла): {this.state.count}</p>
                <p>Смонтирован: {this.state.mountedAt || "—"}</p>
                <button type="button" onClick={() => this.setState((s) => ({ count: s.count + 1 }))}>
                    +1
                </button>
            </div>
        );
    }

    /**
     * componentDidMount — вызывается сразу после первого рендера, когда компонент уже в DOM.
     * Идеальное место для: подписок, запросов к API, таймеров, работы с DOM.
     * Вызов setState здесь вызовет дополнительный рендер (до отображения), пользователь не увидит промежуточное состояние.
     */
    componentDidMount() {
        this.setState({ mountedAt: new Date().toLocaleTimeString() });
        // Пример: подписка, таймер — отписка/очистка в componentWillUnmount
        this._interval = setInterval(() => { }, 1000); // заглушка для демо очистки
    }

    // ========== ФАЗА ОБНОВЛЕНИЯ (Updating) ==========

    /**
     * shouldComponentUpdate — вызывается перед render при обновлении (после getDerivedStateFromProps).
     * Возврат false отменяет последующие render, getSnapshotBeforeUpdate и componentDidUpdate.
     * Используется для оптимизации; в большинстве случаев достаточно React.memo или PureComponent.
     */
    shouldComponentUpdate(nextProps, nextState) {
        // Можно пропустить рендер, если не изменилось то, что отображаем
        if (nextState.count === this.state.count && nextProps.initialCount === this.props.initialCount) {
            return false;
        }
        return true;
    }

    /**
     * getSnapshotBeforeUpdate — вызывается прямо перед применением изменений из render к DOM.
     * Возвращаемое значение передаётся третьим аргументом в componentDidUpdate.
     * Используется редко: например, чтобы сохранить позицию скролла перед обновлением списка.
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Пример: можно вернуть, например, scrollHeight контейнера
        return {prevCount: prevState.count };
    }

    /**
     * componentDidUpdate — вызывается после обновления (после того как DOM обновился).
     * Идеально для: запросов к API при смене props, работы с DOM после обновления.
     * Условие if (prevProps.id !== this.props.id) обязательно, иначе — риск бесконечного цикла при setState.
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        void snapshot; // аргумент от getSnapshotBeforeUpdate, в этом примере не используется
        if (prevState.count !== this.state.count) {
            // Например: логирование, аналитика, синхронизация с внешним миром
        }
    }

    // ========== ФАЗА РАЗМОНТИРОВАНИЯ (Unmounting) ==========

    /**
     * componentWillUnmount — вызывается непосредственно перед удалением компонента из DOM.
     * Обязательно отменять подписки, таймеры, слушатели и т.п., созданные в componentDidMount.
     * После этого setState вызывать нельзя — компонент уже не будет перерисовываться.
     */
    componentWillUnmount() {
        if (this._interval) clearInterval(this._interval);
    }

    // ========== ОБРАБОТКА ОШИБОК (Error handling) ==========

    /**
     * getDerivedStateFromError — вызывается при ошибке в дочернем компоненте (в т.ч. в его дочерних).
     * Возвращает объект для обновления state (например, {hasError: true }) для показа fallback UI.
    * Не подходит для побочных эффектов (логирование) — для этого componentDidCatch.
    */
    static getDerivedStateFromError(error) {
        void error; // ошибка доступна, для логирования — componentDidCatch
        return {hasError: true };
    }

    /**
     * componentDidCatch — вызывается при ошибке в дочернем компоненте.
     * Используется для логирования в сервис (Sentry и т.п.). Не обновляет state — для UI используйте getDerivedStateFromError.
     */
    componentDidCatch(error, errorInfo) {
        console.error("About: поймана ошибка в дереве:", error, errorInfo);
    }
}`} />
        </div>
    )
}

export default About;