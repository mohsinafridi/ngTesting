import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });
  // ngOnInit Test
  it('should set todo property with the items returned from server', () => {
    // Spy on Service methods
    let todoArray = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todoArray]);
    });

    // act
    component.ngOnInit();
    // assert
    // expect(component.todos.length).toBeGreaterThan(1);
    expect(component.todos).toBe(todoArray);

  });

  // Add Method Tests
  //Add Object in Todo
  it('should calls server to save changes when new todo item is added ', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    // act
    component.add();
    // Assert
    expect(spy).toHaveBeenCalled();
  });

  // After Successful Addding
  it('should add new todo item in array which is returned from server', () => {
    let todo = { id: 1 };
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    // act
    component.add();
    // Assert
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  // For Error
  it('should set the message property if server return an error when adding new todo', () => {
    let errorMessage = 'Error from server';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(errorMessage));

    // act
    component.add();
    // assert
    expect(component.message).toBe(errorMessage);
  });

  // For confirm to delete functionality
  it('should call server to delete todo item if confirm user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    // act
    component.delete(1);
    // Assert
    expect(spyOn).toHaveBeenCalledWith(1);
  });

  // For cancel to delete functionality
  it('should Not call server to delete todo item if confirm user cancel', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    // act
    component.delete(1);
    // Assert
    expect(spyOn).not.toHaveBeenCalled();
  });
});
