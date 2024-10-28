# Hooks
> Функции, которые прзволяют использовать приемущества классовых компонентов\
    в функциональных компонентах и не делать отдельной конвертации компонентов в класс

**useState**
> возвращает переменную для получения значения состояния и\
    функцию для установки значения состояния
```tsx
import { useState } from 'react'

const initialState = [] // {}, str, num, ...
const [news, setNews] = useState(initialState)

setState(data)
setState(prevState => {'... do something and return new state ...'});
```

**useEffect**
> хук для выполнения побочных эффектов. Позволяет синхронизировать\
    компонент с какой либо системой вне *React*
```tsx
import { useEffect } from 'react'

useEffect(() => {
return unsubscribe-func;
}, [deps])
```

**useRef**
> получение текущего значения
    ссылка на DOM-элементы
```tsx
import { useRef } from 'react';

const nodeRef = useRef();
const valueRev = useRef();
valueRev.current = 'some data'

return (
    <div ref={nodeRef}></div>
)
```

**useCallback**
> мемоизация функции, которая будет сохранять свою ссылку при ререндерах
```tsx
const memoizedCallback = useCallback(() => {...}, []);
```

**useMemo**
> мемоизация значения, которое не будет пересоздаваться при ререндерах
```tsx
const memoizedValue = useMemo(() => {...}, []);
```

## Context API
> доступ к данным из любого компонента без необходимости\
    передавать props через всю цепочку компонентов
```tsx
// ./App.tsx
import { createContext } from 'react';

const AuthContext = createContext({
        tokem: null,
        profile: null,
    });

const App = () => {
    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState(null);

    return (
        <AuthContext.Provider value={{token, setToken, profile, setProfile}}>
            <Component1 />
            <Component2 />
            ...
        </AuthContext.Provider>
    )
}
```
```tsx
// ./Component1.tsx

import { useContext } from 'react';
import { AuthContext } from './App'

const Component1 = () => {
    const {token, setToken} = useContext(AuthContext);
    return (
        <></>
    )
}
```

