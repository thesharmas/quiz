function QuestionCard(props){
    return(
        <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md">
    
        <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
           {props.questionTitle}
        </div>

       
        <div class="p-6 bg-white border-b border-gray-200">
            {props.questionText}
        </div>

     
        <div class="flex justify-between  p-6 bg-white border-gray-200 text-center">
           
        <a class="bg-blue-500 order-1 basis-4 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" 
                href="#">Yes</a>
        <a class="bg-blue-500 order-2 basis-4 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" 
                href="#">No</a>
        </div>
     </div>
    </div>

    );

}

export default QuestionCard;