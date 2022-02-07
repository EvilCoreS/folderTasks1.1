function csv(csvText){
    const data = csvText
        .split("\n")
        .map(value => {
            const row = value.split(',');
            let obj = new Map([
                ["x", row[0]],
                ["y", row[1]],
                ["name", row[2]],
                ["population", row[3]]
            ])
            return obj;
        })
        .filter(data => data.get("x") !== undefined && data.get("y") !== undefined && data.get("name") !== undefined && data.get("population") !== undefined)
        .sort((a, b) =>  Number(a.get("population")) < Number(b.get("population")) ? 1 : -1)
        .slice(0, 10)
        .reduce(function (obj, data, index){
            obj[data.get("name")] = {
                "population": data.get("population"),
                "rating": index+1
            }
            return obj;
        }, {})
    return (text) => {
        let names = Object.keys(data)
        let row = text.split(" ")
        let str
        names.forEach(name => row.forEach(function (word){
            if (name.includes(word)){
                str = text.replace(word, `${word} (${data[name]["rating"]} место в ТОП-10 самых крупных городов Украины, население ${data[name]["population"]} человек)`)
            }
        }))
        return str;
    };
}
let test = `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент
#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,
12.12,13.13,Город1,1
11.41,55.55,Город2,50
90.99,91.04,Город3,400000
64.75,86.97,Город4,34854
75.47,53.32,Город5,56008`
let test1 = csv(test)
console.log(test1("Это город Алушта"))
console.log(test1("Это город Бердянськ"))
console.log(test1("Это Бердичів"))
console.log(test1("Знакомтесь, это Біла Церква"))
console.log(test1("вывф выфввыф город Джанкой"))
console.log(test1("Вінниця"))
console.log(test1("Город1")) //у этого города меньше всего популярность => не входит в топ 10 => undefined
console.log(test1("Город2"))
console.log(test1("Город3"))
console.log(test1("Город4"))
console.log(test1("Город5")) // всего 11 городов