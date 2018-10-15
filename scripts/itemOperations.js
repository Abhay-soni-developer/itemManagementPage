const itemOperations = {
    items : [],
    addItem(id, name, price){
        //unique Id Code
        var c =null;
        c = this.items.find(item=>item.id==id);
        //if c is undefined that means no item with this id exist therefore
        //add this item in to list 
        if(!c){
            //pushing element to item
            this.items.push(new Item(parseInt(id), name, parseInt(price) ));
            // returning true indicating Success Of addInItems Array Operation
            return true;
        }else {
            // RETURN false indicating failure of addition of item, 
            // showing warning to user
            return false;
        }
    },

    deleteItems(){
        //delete the selected Items
        this.items = this.items.filter(item=>(item.isSelected!=true));
    },

    editItem(id){
        //check that only one item is selected
        //put that Item back to form for update 
        var item = this.items.filter(item=>{return item.isSelected==true});
        if(item.length==1){
            item[0].toggleEditState();
            return item[0];
        }else{
            return false;
        }
    },

    updateItem(id, name, price){
        //check if item is ready for Edit and if yes than 
        // only update it with new data
        var item = this.items.find( item=>{ return item.id==id });
        if(item){
            item.name=name;
            item.price=price;
            return true;
        }else{
            return false;
        }
    },

    sortItemList(){
        this.items=this.items.sort((item1,item2)=>{return item1.price-item2.price});
    },

    saveList(){
        if(localStorage){
            localStorage.setItem("itemList", JSON.stringify(this.items));
        }else{
            alert("Sorry your Browser Does not Support LocalStorage");
        }
    },

    loadList(){
        if(localStorage){
            if(localStorage.itemList!=undefined){
            var items=JSON.parse(localStorage.itemList);
            this.items=[];
            for(let x of items){
                this.addItem(x.id, x.name, x.price);
            }
            }else{
                alert("Sorry No List Found");
            }
        }else{
            alert("Sorry your Browser Does not Support LocalStorage");
        }
    },

    toggleSelectState(id){
        this.items.find(item=>item.id==id).toggleSelectState();
    }
}

