function QuestionCard(props){
    console.log(props.yesClick)
    console.log(props)
    return(
        <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md">
    
        <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
           {props.questionTitle}
        </div>

       
        <div className="p-6 bg-white border-b border-gray-200">
            {props.questionText}
        </div>

     
        <div className="flex justify-between space-x-40 p-6 bg-white border-gray-200 text-center">
           
        <button onClick={() => props.yesClick(1)} className="bg-blue-500 order-1 basis-4 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" 
                >Yes</button>
        <button  className="bg-blue-500 order-2 basis-4 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" 
                >No</button>
        </div>
     </div>
    </div>

    );

}

export default QuestionCard;