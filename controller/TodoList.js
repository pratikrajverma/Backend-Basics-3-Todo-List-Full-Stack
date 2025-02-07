const Todo = require("../model/tododata");


const createTodo = async (req, res) => {
  try {
    let inputValue = req.body.inputValue;

    if (!inputValue) {
      return res.status(400).json({
        success: false,
        message: "input value is empty by user",
      });
    }

     

    const response = await Todo.create({ inputValue: inputValue });

    if (!response) {
      return res.status(400).json({
        success: false,
        message: "failed to create Todo list",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: "Todo list created successfully",
    });

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "failed to create Todo list " + err,
    });
  }
};


const deleteTodo = async (req,res)=>{
    try{
        const {todoId} = req.params;

        if(!todoId){
            return res.status(400).json({
                success:false,
                message:"Todo id is required for deletion"
            })
        }

        const response = await Todo.findByIdAndDelete(todoId);

        if (!response) {
            return res.status(400).json({
              success: false,
              message: "failed to delete Todo list",
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"Todo list deleted successfully"
        })



    }catch(err){
        return res.status(400).json({
            success:false,
            message:" failed to delete Todo list"+err
        })
    }
}

const showTodo = async (req,res)=>{
    try{
        const data = await Todo.find()

        if(!data){
            return res.status(400).json({
                success:false,
                message: "No Todo list found",
            });
        }

        res.status(200).json({
            success:true,
            message:"data fetch successfuly",
            data:data,
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            message: "failed to show  Todo list " + err,
          });
    }
}


module.exports = {createTodo, deleteTodo ,showTodo}