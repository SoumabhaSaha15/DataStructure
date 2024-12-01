#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct Node {
  char Data;
  struct Node *Previous, *Next;
} Char;
typedef struct CharLink {
  Char *Begin, *End;
} String;
size_t Length(String str) {
  size_t length = 0;
  for (Char *node = str.Begin; node->Data != '\0'; node = node->Next)
    length++;
  return length;
}
void StringInit(String *str) {
  str->Begin = (Char *)malloc(sizeof(Char));
  str->End = (Char *)malloc(sizeof(Char));
  str->End->Previous = NULL;
  str->End->Next = NULL;
  str->End->Data = '\0';
  str->Begin = str->End;
}
void StringAppend(String *str, char c) {
  Char *node = (Char *)malloc(sizeof(Char));
  node->Data = c;
  if (str->Begin == str->End) {
    str->Begin = node;
    str->End->Next = NULL;
    str->End->Previous = str->Begin;
    str->Begin->Next = str->End;
    str->Begin->Previous = NULL;
  } else {
    node->Previous = str->End->Previous;
    node->Previous->Next = node;
    node->Next = str->End;
    str->End->Previous = node;
  }
}
void ScanString(char msg[], String *str) {
  printf("%s", msg);
  StringInit(str);
  char ch;
  while ((ch = getchar()) != '\n')
    StringAppend(str, ch);
  // printf("\n--Length : %lu--\n", Length(str));
}
void PrintString(String str) {
  for (Char *node = str.Begin; node->Data != '\0'; node = node->Next)
    printf("%c", node->Data);
}
String GetString(char msg[]) {
  printf("%s", msg);
  String str;
  StringInit(&str);
  char ch;
  while ((ch = getchar()) != '\n')
    StringAppend(&str, ch);
  // printf("\n--Length : %lu--\n", Length(&str));
  return str;
}
String CreateString(char msg[]) {
  String str;
  StringInit(&str);
  for (int i = 0; i < strlen(msg); i++)
    StringAppend(&str, msg[i]);
  return str;
}
String ReadFile(char file_name[]){
  FILE *file_ptr = fopen(file_name,"r");
  String file_content;
  char ch='\0';
  StringInit(&file_content);
  while ((ch = fgetc(file_ptr))!= EOF)
    StringAppend(&file_content,ch);
  return file_content;
}
void ScanFile(char file_name[],String *str){
  FILE *file_ptr = fopen(file_name,"r");
  String file_content;
  char ch='\0';
  StringInit(&file_content);
  while ((ch = fgetc(file_ptr))!= EOF)
    StringAppend(&file_content,ch);
  *str = file_content;
}