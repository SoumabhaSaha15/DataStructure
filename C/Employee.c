#include <stdio.h>
typedef struct Employee{
  int Id,Salary;
  char Nmae[256];
}Employee;
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