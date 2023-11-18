document.querySelector("#add").onclick = function () {
  if (document.querySelector("#feild").value.length == 0) {
    alert("Kindly Enter Task Name!!!!");
  } else {
    document.querySelector("#task").innerHTML += `
            <div   class="task py-2  px-3 gap-x-4  capitalize font-semibold  rounded-md items-center    grid grid-cols-[1fr_auto] my-3 bg-blue-400 border border-violet-300">
                <span contenteditable="true"  id="taskname"
                class=" text-white px-2 py-1 ">
                    ${document.querySelector("#feild").value}
                </span>
                <div id="per" class=" flex justify-end gap-x-2  ">
                <button class="delete text-white bg-red-600 py-[0.125rem] px-1 rounded-sm border-2 border-white">
                 del 
                </button>
            </div>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        document.querySelector("#per").parentNode.remove();
      };
    }
  }
};
