#include "./DoubleLinkedList.c"
typedef struct String{
  char Value[256];
}String;
bool IsTrue() {
  int number;
  int unused __attribute__((unused));
  printf("False 0,True 1 [0/1]: ");
  unused = scanf("%d", &number);
  fflush(stdin);
  return ((number == 0) ? false : true);
}
String *GetString(){
  String str;
  printf("enter value : ");
  scanf("%[^\n]%*c",str.Value);
  String *Str = (String*)malloc(sizeof(String));
  strcpy(Str->Value,str.Value);
  return Str;
}
void PrintString(void *str){
  String *Strptr = (String*)str;
  printf("{Value : \"%s\"}\n",Strptr->Value);
}
int main() {
  List list1;
  printf("\n!!! ADD 4 MEMBER !!!\n");
  bool i = false;
  do {
    (!i) ? InitiateList(&list1, GetString(), sizeof(String))
         : InsertAtLast(&list1, GetString(), sizeof(String));
    printf("exit False,continue True ");
    i = IsTrue();
  } while (i);
  system("cls");
  Traverse(&list1, &PrintString);
  ReverseTraverse(&list1, &PrintString);
  printf("\n list size : %lu \n", SizeOf(&list1));
  DeleteAtSpecific(&list1, 0);
  Traverse(&list1, &PrintString);
  ReverseTraverse(&list1, &PrintString);
  printf("\n list size : %lu \n", SizeOf(&list1));
  DeleteAtSpecific(&list1, 2);
  Traverse(&list1, &PrintString);
  ReverseTraverse(&list1, &PrintString);
  printf("\n list size : %lu \n", SizeOf(&list1));
  DeleteAtSpecific(&list1, SizeOf(&list1)-1);
  Traverse(&list1, &PrintString);
  ReverseTraverse(&list1, &PrintString);
  DeleteAtSpecific(&list1, SizeOf(&list1));
  printf("\n list size : %lu \n", SizeOf(&list1));
  return 0;
}
