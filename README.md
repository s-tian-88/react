# Props
> Входные данные React-компонентов, передаваемые от родительского компонента доченрнему
> Предназначены только для чтения

- Props передаются в качестве атрибутов в элемент: `<UserProfile user={user} />`
- `{}` позволяют передавать сам объект, в противном случае он передаётся в качестве строки
- В *props* можно передавать: примитивы, объекты, массивы и функции
- Внутри компонента props можно получить либо как первый аргумент функции, либо как первый аргумент конструктора
