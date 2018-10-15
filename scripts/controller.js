app.controller("pm-controller", ["$scope", "pm-model", (scope, factory)=>{
    
    scope.item = {};
    scope.items=[];
    scope.idBarStatus=false;
    
    scope.addItem=()=>{
        if(itemOperations.addItem(scope.item.id, scope.item.name, scope.item.price)){
            scope.items=itemOperations.items;
            scope.item.id="";
            scope.item.name="";
            scope.item.price="";
        }else{
            alert("Item With this id already Exist");
        }
    }

    scope.toggleSelectState = (id)=>{
        itemOperations.toggleSelectState(id);
    }

    scope.deleteSelected = ()=>{
        itemOperations.deleteItems();
        scope.items=itemOperations.items;
    }

    scope.sortList = ()=>{
        itemOperations.sortItemList();
        scope.items = itemOperations.items;
    }

    scope.editItem = ()=>{
        var item=itemOperations.editItem();
        if(item){
            scope.item.id=item.id;
            scope.idBarStatus=true;
            scope.item.name=item.name;
            scope.item.price=item.price;
        }else{
            alert("You Can,t Select More Than 1 Item at a Time or 0 item");
        }
    }

    scope.updateItem = ()=>{
        if(itemOperations.updateItem(scope.item.id, scope.item.name, scope.item.price)){
            scope.idBarStatus = false;
            scope.items=itemOperations.items;
        }else{
            alert("Some Error Occured");
        }
    }

    scope.saveList = ()=>{
        itemOperations.saveList();
        alert("List Saved");
    }

    scope.loadList = ()=>{
        itemOperations.loadList();
        scope.items=itemOperations.items;
    }

}])