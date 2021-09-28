# React

## React 15 声明周期

- constructor()
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillMount()
- componentWillUpdate()
- componentDidUpdate()
- componentDidMount()
- render()
- componentWillUnmount()

## React 16.8 以后

- Mounting
  - constructor()
  - static getDerivedStateFromProps()
  - render()
  - componentDidMount()
- Updating
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()
- Unmounting
  - componentWillUnmount()
- Error Handling
  - static getDerivedStateFromError()
  - componentDidCatch()
