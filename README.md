# DOM events

## **Required**
* Создайте элемент p, при клике на котором появляется картинка размером 100px.
* При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px.
* При клике на картинке она должна исчезать.

## **Additional**

Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий click, mouseover, mouseout
```
var collection = []

function over ( event ) {
    ...
}
function out ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        ...
    }
)
```
* Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером, чем родитель
* Установите значение #ff00ff50 атрибута background-color каждому элементу
* Установите значение dotted 1px yellow; атрибута border каждому элементу
* При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050
* При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение
* При наступлении события click элемент должен быть удален
* При наведении мышки на элемент должна появляться подсказка с его именем ( "first", "second", "third", "fourth" )

## **Additional** 

Условия предыдущего задания изменить так:
```
var collection = []

function enter ( event ) {
    ...
}
function leave ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    ...
)
```
* При удалении элемента его потомки должны оставаться
