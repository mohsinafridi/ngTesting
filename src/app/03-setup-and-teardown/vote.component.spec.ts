import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });


  /*
  There are 4 methods in jasmine.
  beforeEach(//set up) // Executes before each test.
  afterEach(//tear down) // Executes after each test.
  aferAll() // Executes after all tests.
  beforeAll() // Executes before all tests.
  */
  it('should increment totalVotes when upvote', () => {
    // Arrange

    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvote', () => {
    // Arrange
   
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});