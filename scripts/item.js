class Item{
    
    constructor(id, name, price){
        this.id=id;
        this.name=name;
        this.price=price;
        this.isSelected=false;
        this.isReadyForEdit=false;
    }

    toggleSelectState(){
        this.isSelected=!this.isSelected;
    }

    toggleEditState(){
        this.isReadyForEdit=!this.isReadyForEdit;
    }

    
}