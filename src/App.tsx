import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotsType = 'Dollars' | 'RUBLS' | 'ALL'

export type MoneyType = {
    banknotes: BanknotsType
    value: number
    number: string
}

let defaultMoney: MoneyType[] = [
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]

export const moneyFilter = (money: MoneyType[], filterValue: BanknotsType): MoneyType[] => {
    if(filterValue === 'ALL') return money
    return money.filter(el => el.banknotes===filterValue)
}

function App() {
    const [filterValue, setFilterValue] = useState<BanknotsType>('ALL')

    const filteredMoney = moneyFilter(defaultMoney, filterValue)
    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!

            />
        </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
