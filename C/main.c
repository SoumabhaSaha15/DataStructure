#include "./DoubleLinkedList.c"
void print_menu() {
  printf("\nMenu:\n");
  printf("1. Initiate List\n");
  printf("2. IAF List\n");
  printf("3. IAL List \n");
  printf("4. IAS List \n");
  printf("5. Traverseal  \n");
  printf("6. DAF List\n");
  printf("7. DAL List\n");
  printf("8. DAS List\n");
  printf("9. Clear List\n");
  printf("10. end process \n");
}
int GetInt(char msg[]) {
  int number;
  int unused __attribute__((unused));
  printf("%s: ", msg);
  unused = scanf("%d", &number);
  fflush(stdin);
  return number;
}
typedef struct String {
  char Value[256];
} String;
String *GetString() {
  int unused __attribute__((unused));
  String str;
  String *Str = (String *)malloc(sizeof(String));
  printf("Enter Value : ");
  unused = scanf("%[^\n]s", (str.Value));
  fflush(stdin);
  // printf("ln : %d", __LINE__);
  strcpy(Str->Value, str.Value);
  return Str;
}
int* GetInteger(){
  int unused __attribute__((unused));
  int *newInt = (int*)malloc(sizeof(int));
  printf("Enter Int : ");
  unused = scanf("%d", newInt);
  fflush(stdin);
  return newInt;
}
void PrintString(void *str) {
  String *string = (String *)str;
  printf("{\n\tValue:\"%s\"\n}", string->Value);
}
void PrintInt(void *Int) {
  int *newInt = (int*)Int;
  printf("{\n\tValue:%d\n}", *newInt);
}
void TestStringList() {
  List StringList;
  int choice = 1;
  int unused __attribute__((unused));
  while (choice) {
    print_menu();
    printf("Enter your choice: ");
    unused = scanf("%d", &choice);
    fflush(stdin);
    switch (choice) {
    case 1: {
      InitiateList(&StringList, GetString(), sizeof(String));
    } break;
    case 2: {
      InsertAtFirst(&StringList, GetString(), sizeof(String));
    } break;
    case 3: {
      InsertAtLast(&StringList, GetString(), sizeof(String));
    } break;
    case 4: {
      InsertAtSpecific(&StringList, GetString(), sizeof(String),GetInt("enter Index"));
    } break;
    case 5: {
      Traverse(&StringList, &PrintString);
      ReverseTraverse(&StringList, &PrintString);
      printf("\n Size of stringlist: %lu\n", SizeOf(&StringList));
    } break;
    case 6: {
      DeleteAtFirst(&StringList);
    } break;
    case 7: {
      DeleteAtLast(&StringList);
    } break;
    case 8: {
      DeleteAtSpecific(&StringList, GetInt("Enter Index"));
    } break;
    case 9: {
      ClearList(&StringList);
    } break;
    case 10: {
      system("cls");
      Traverse(&StringList, &PrintString);
      ReverseTraverse(&StringList, &PrintString);
      choice = 0;
    } break;
    default:
      printf("Invalid choice\n");
    }
  }
}
void TestIntList() {
  List IntList;
  int choice = 1;
  int unused __attribute__((unused));
  while (choice) {
    print_menu();
    printf("Enter your choice: ");
    unused = scanf("%d", &choice);
    fflush(stdin);
    switch (choice) {
    case 1: {
      InitiateList(&IntList, GetInteger(), sizeof(String));
    } break;
    case 2: {
      InsertAtFirst(&IntList, GetInteger(), sizeof(String));
    } break;
    case 3: {
      InsertAtLast(&IntList, GetInteger(), sizeof(String));
    } break;
    case 4: {
      InsertAtSpecific(&IntList, GetInteger(), sizeof(String),GetInt("enter Index"));
    } break;
    case 5: {
      Traverse(&IntList, &PrintInt);
      ReverseTraverse(&IntList, &PrintInt);
      printf("\n Size of int list: %lu\n", SizeOf(&IntList));
    } break;
    case 6: {
      DeleteAtFirst(&IntList);
    } break;
    case 7: {
      DeleteAtLast(&IntList);
    } break;
    case 8: {
      DeleteAtSpecific(&IntList, GetInt("Enter Index"));
    } break;
    case 9: {
      ClearList(&IntList);
    } break;
    case 10: {
      system("cls");
      Traverse(&IntList, &PrintInt);
      ReverseTraverse(&IntList, &PrintInt);
      choice = 0;
    } break;
    default:
      printf("Invalid choice\n");
    }
  }
}
int main() {
  TestStringList();
  TestIntList();
  return 0;
}
