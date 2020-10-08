import image from './assets/image.png'
import {TextBlock,TitleBlock,ImageBlock,ColumnsBlock} from './classes/blocks'

export const model=[
    new TitleBlock('Конструктор сайтов на чистом JS',{
        tag : 'h2',
        //styles :`color : red ; text-align : center`
        styles :{
            background : 'linear-gradient(to right,#ff0099,#493240)',
            color : '#fff',
            padding :'1rem',
            'text-align' : 'center'
        }
    }),
    new ImageBlock(image,{
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content' : 'center'
        },
        imageStyles :{
            width : '500px',
            height : 'auto'
        },
        alt : 'Its image'
    }),
    new TextBlock('Небольшой проект с курсов',{
        tag : "h2",
        styles: {
            padding: '1.5rem 0',
            display: 'flex',
            'justify-content': 'center',
            background: '#9400D3',
            'text-align': 'center',
            color: '#fff'
        }
        }),
    new ColumnsBlock(['Приложение на чистом JS','Принципы SOLID и ООП','Без использования библиотек'],{
        styles: {
            padding: '1.5rem 0',
            display : 'flex',
            'justify-content' : 'center',
            background: '#FFFF00',
            'text-align' : 'center',
            color : 'black'
        }
    }),
    ]