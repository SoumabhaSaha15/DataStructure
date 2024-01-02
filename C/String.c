#include <stdio.h>
typedef struct String {
  char Value[256];
} String;
String *GetString() {
  int unused __attribute__((unused));
  String str;
  String *Str = (String *)malloc(sizeof(String));
  printf("enter value:");
  unused = scanf("%[^\n]s", (str.Value));
  fflush(stdin);
  strcpy(Str->Value, str.Value);
  return Str;
}
void PrintString(void *str) {
  String *string = (String*)str;
  printf("{\n\tValue:\"%s\"\n}", string->Value);
}