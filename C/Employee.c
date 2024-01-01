#include "./DoubleLinkedList.c"
typedef struct Employee{
  int Id,Salary;
  char Nmae[256];
}Employee;
bool IsTrue() {
  int number;
  int unused __attribute__((unused));
  printf("False 0,True 1 [0/1]: ");
  unused = scanf("%d", &number);
  fflush(stdin);
  return ((number == 0) ? false : true);
}
Employee *GetEmployee(){
  Employee e;
  printf("enter id: ");
  scanf("%d",&e.Id);
  fflush(stdin);
  printf("enter salary: ");
  scanf("%d",&e.Salary);
  fflush(stdin);
  printf("enter name: ");
  scanf("%[^\n]%*c",e.Nmae);
  Employee *emp = (Employee*)malloc(sizeof(Employee));
  emp->Id = e.Id;
  emp->Salary = e.Salary;
  strcpy(emp->Nmae,e.Nmae);
  return emp;
}
void PrintEmployee(void *Emp){
  Employee *e = (Employee*)Emp;
  printf("{Id : %d,Salary : %d,Name : \"%s\"}\n",e->Id,e->Salary,e->Nmae);
}
int main() {
  List list1;
  printf("\n!!! ADD 4 MEMBER !!!\n");
  bool i = false;
  do {
    (!i) ? InitiateList(&list1, GetEmployee(), sizeof(Employee))
         : InsertAtLast(&list1, GetEmployee(), sizeof(Employee));
    printf("exit False,continue True ");
    i = IsTrue();
  } while (i);
  system("cls");
  Traverse(&list1, &PrintEmployee);
  ReverseTraverse(&list1, &PrintEmployee);
  printf("\n list size : %lu \n", SizeOf(&list1));
  DeleteAtSpecific(&list1, 0);
  Traverse(&list1, &PrintEmployee);
  ReverseTraverse(&list1, &PrintEmployee);
  printf("\n list size : %lu \n", SizeOf(&list1));
  DeleteAtSpecific(&list1, 2);
  Traverse(&list1, &PrintEmployee);
  ReverseTraverse(&list1, &PrintEmployee);
  printf("\n list size : %lu \n", SizeOf(&list1));
  DeleteAtSpecific(&list1, SizeOf(&list1)-1);
  Traverse(&list1, &PrintEmployee);
  ReverseTraverse(&list1, &PrintEmployee);
  DeleteAtSpecific(&list1, SizeOf(&list1));
  printf("\n list size : %lu \n", SizeOf(&list1));
  return 0;
}
