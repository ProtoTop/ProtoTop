
export  default function        Header(){
const   headerElements=[
    {
        name:'Features'
    },
    {
        name:'Pricing'
    },
    {
        name:'Help Center'
    },
    {
        name:'resource',
    },
    {
        name:'login'
    }
]

const   HeaderWrap=headerElements.map((item,index)=>(<h1  key={index}  className="font-bold underline">{item.name}</h1>))
    return(
       <header  className="underline" >
{HeaderWrap}
       </header>
    )
}
