// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.addReservedWords("alignas,alignof,and,and_eq,asm,atomic_cancel,atomic_commit,atomic_noexcept,auto,bitand,bitor,bool,break,case,catch,char,char16_t,char32_t,class,compl,concept,const,constexpr,const_cast,continue,co_await,co_return,co_yield,decltype,default,delete,do,double,dynamic_cast,else,enum,explicit,export,extern,false,float,for,friend,goto,if,import,inline,int,long,module,mutable,namespace,new,noexcept,not,not_eq,nullptr,operator,or,or_eq,private,protected,public,register,reinterpret_cast,requires,return,short,signed,sizeof,static,static_assert,static_cast,struct,switch,synchronized,template,this,thread_local,throw,true,try,typedef,typeid,typename,union,unsigned,using,virtual,void,volatile,wchar_t,while,xor,xor_eq");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_SCOPE_RES=1;Blockly.Arduino.ORDER_POSTFIX_INC_DEC=2;Blockly.Arduino.ORDER_FUNCTIONAL_CAST=2;Blockly.Arduino.ORDER_FUNCTION_CALL=2;Blockly.Arduino.ORDER_SUBSCRIPT=2;Blockly.Arduino.ORDER_MEMBER_ACCESS=2;Blockly.Arduino.ORDER_UNARY_PREFIX=3;Blockly.Arduino.ORDER_C_CAST=3;Blockly.Arduino.ORDER_INDIRECTION=3;Blockly.Arduino.ORDER_DEREFERENCE=3;Blockly.Arduino.ORDER_DYNAMIC_MEMORY=3;Blockly.Arduino.ORDER_POINTER_TO_MEMBER=4;
Blockly.Arduino.ORDER_MULTIPLICATIVE=5;Blockly.Arduino.ORDER_ADDITIVE=6;Blockly.Arduino.ORDER_BITWISE_SHIFT=7;Blockly.Arduino.ORDER_THREE_WAY_COMPARISON=8;Blockly.Arduino.ORDER_RELATIONAL=9;Blockly.Arduino.ORDER_EQUALITY=10;Blockly.Arduino.ORDER_BITWISE_AND=11;Blockly.Arduino.ORDER_BITWISE_XOR=12;Blockly.Arduino.ORDER_BITWISE_OR=13;Blockly.Arduino.ORDER_LOGICAL_AND=14;Blockly.Arduino.ORDER_LOGICAL_OR=15;Blockly.Arduino.ORDER_CONDITIONAL=16;Blockly.Arduino.ORDER_THROW_OPERATOR=16;
Blockly.Arduino.ORDER_ASSIGNMENT=16;Blockly.Arduino.ORDER_COMMA=17;Blockly.Arduino.ORDER_NONE=99;Blockly.Arduino.init=function(a){Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.functionNames_=Object.create(null);Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_)};
Blockly.Arduino.finish=function(a){a&&(a=Blockly.Arduino.prefixLines(a,Blockly.Arduino.INDENT));var b=[],c=[],d;for(d in Blockly.Arduino.definitions_){var e=Blockly.Arduino.definitions_[d];e.match(/^#include\s/)?b.push(e):c.push(e)}delete Blockly.Arduino.definitions_;delete Blockly.Arduino.functionNames_;Blockly.Arduino.variableDB_.reset();return(b.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};
Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Arduino.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();(d=Blockly.utils.wrap(d,Blockly.Arduino.COMMENT_WRAP-3))&&(c=a.getProcedureDef?c+Blockly.Arduino.prefixLines(d+"\n","/// "):c+Blockly.Arduino.prefixLines(d+"\n","// "));for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Arduino.allNestedComments(d))&&(c+=Blockly.Arduino.prefixLines(d,
"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Arduino.blockToCode(e);return c+b+e};
Blockly.Arduino.getAdjusted=function(a,b,c,d,e){c=c||0;e=e||Blockly.Arduino.ORDER_NONE;a.workspace.options.oneBasedIndex&&c--;var g=a.workspace.options.oneBasedIndex?"1":"0";a=c?Blockly.Arduino.valueToCode(a,b,Blockly.Arduino.ORDER_ADDITIVE)||g:d?Blockly.Arduino.valueToCode(a,b,Blockly.Arduino.ORDER_UNARY_PREFIX)||g:Blockly.Arduino.valueToCode(a,b,e)||g;if(Blockly.isNumber(a))a=parseInt(a,10)+c,d&&(a=-a);else{if(0<c){a=a+" + "+c;var f=Blockly.Arduino.ORDER_ADDITIVE}else 0>c&&(a=a+" - "+-c,f=Blockly.Arduino.ORDER_ADDITIVE);
d&&(a=c?"-("+a+")":"-"+a,f=Blockly.Arduino.ORDER_UNARY_PREFIX);f=Math.floor(f);e=Math.floor(e);f&&e>=f&&(a="("+a+")")}return a};Blockly.Arduino.setup_control=function(a){return"void setup() {\n "+Blockly.Arduino.statementToCode(a,"setup_statements")+"}\n"};Blockly.Arduino.loop_control=function(a){return"void loop() {\n"+Blockly.Arduino.statementToCode(a,"loop_statements")+"}\n"};Blockly.Arduino.if_statement=function(a){var b=Blockly.Arduino.valueToCode(a,"condition",Blockly.Arduino.ORDER_NONE);a=Blockly.Arduino.statementToCode(a,"IF");return"if ("+b+") {\n "+a+"}\n"};
Blockly.Arduino.while_statement=function(a){var b=Blockly.Arduino.valueToCode(a,"condition",Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(a,"DO");c=Blockly.Arduino.addLoopTrap(c,a.id);return"while ("+b+") {\n"+c+"}\n"};Blockly.Arduino.do_while_statement=function(a){var b=Blockly.Arduino.valueToCode(a,"condition",Blockly.Arduino.ORDER_NONE)||"false";return"do {\n"+Blockly.Arduino.statementToCode(a,"DO")+"} while ("+b+");\n"};
Blockly.Arduino.wait_control=function(a){return"delay("+a.getFieldValue("wait_time")+");\n"};Blockly.Arduino.io_pinmode=function(a){var b=Blockly.Arduino.valueToCode(a,"pin_number",Blockly.Arduino.ORDER_NONE)||0;a=a.getFieldValue("MODE");return"pinMode("+b+", "+a+");\n"};Blockly.Arduino.io_digital_write=function(a){var b=Blockly.Arduino.valueToCode(a,"pin_number",Blockly.Arduino.ORDER_NONE)||0;a=a.getFieldValue("pin_state");return"digitalWrite("+b+", "+a+");\n"};
Blockly.Arduino.io_digital_read=function(a){return["digitalRead("+(Blockly.Arduino.valueToCode(a,"pin_number",Blockly.Arduino.ORDER_NONE)||0)+")",Blockly.Arduino.ORDER_FUNCITON_CALL]};Blockly.Arduino.io_analog_write=function(a){var b=Blockly.Arduino.valueToCode(a,"pin_number",Blockly.Arduino.ORDER_NONE)||0;a=a.getFieldValue("analog_val");return"analogWrite("+b+", "+a+");\n"};
Blockly.Arduino.io_analog_read=function(a){return["analogRead("+(Blockly.Arduino.valueToCode(a,"pin_number",Blockly.Arduino.ORDER_NONE)||0)+")",Blockly.Arduino.ORDER_FUNCITON_CALL]};Blockly.Arduino.controls_if=function(a){var b=0,c="";do{var d=Blockly.Arduino.valueToCode(a,"IF"+b,Blockly.Arduino.ORDER_NONE)||"false";var e=Blockly.Arduino.statementToCode(a,"DO"+b);c+=(0<b?" else ":"")+"if ("+d+") {\n"+e+"}";++b}while(a.getInput("IF"+b));a.getInput("ELSE")&&(e=Blockly.Arduino.statementToCode(a,"ELSE"),c+=" else {\n"+e+"}");return c+"\n"};
Blockly.Arduino.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL,d=Blockly.Arduino.valueToCode(a,"A",c)||"0";a=Blockly.Arduino.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.Arduino.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Arduino.ORDER_LOGICAL_AND:Blockly.Arduino.ORDER_LOGICAL_OR,d=Blockly.Arduino.valueToCode(a,"A",c);a=Blockly.Arduino.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.Arduino.logic_negate=function(a){var b=Blockly.Arduino.ORDER_UNARY_PREFIX;return["!"+(Blockly.Arduino.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.Arduino.logic_boolean=function(a){return"TRUE"==a.getFieldValue("BOOL")?["true",Blockly.Arduino.ORDER_ATOMIC]:["false",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.loops={};
Blockly.Arduino.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.Arduino.valueToCode(a,"TIMES",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";var c=Blockly.Arduino.statementToCode(a,"DO");c=Blockly.Arduino.addLoopTrap(c,a.id);a="";var d=Blockly.Arduino.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.Arduino.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+=
"int "+e+" = "+b+";\n");return a+("for (int "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.Arduino.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Arduino.valueToCode(a,"BOOL",b?Blockly.Arduino.ORDER_UNARY_PREFIX:Blockly.Arduino.ORDER_NONE)||"false",d=Blockly.Arduino.statementToCode(a,"DO");d=Blockly.Arduino.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Arduino.controls_for=function(a){var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",d=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",e=Blockly.Arduino.valueToCode(a,"BY",Blockly.Arduino.ORDER_ASSIGNMENT)||"1",g=Blockly.Arduino.statementToCode(a,"DO");g=Blockly.Arduino.addLoopTrap(g,a.id);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){a=
parseFloat(c)<=parseFloat(d);var f="for ("+b+" = "+c+"; "+b+(a?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));f=(1==b?f+(a?"++":"--"):f+((a?" += ":" -= ")+b))+(") {\n"+g+"}\n")}return f};Blockly.Arduino.math={};Blockly.Arduino.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Arduino.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Arduino.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Arduino.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Arduino.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Arduino.ORDER_FUNCTION_CALL]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=Blockly.Arduino.valueToCode(a,"A",b)||"0";a=Blockly.Arduino.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:["pow("+d+", "+a+")",Blockly.Arduino.ORDER_FUNCTION_CALL]};
Blockly.Arduino.math_constrain=function(a){var b=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_COMMA)||0,c=Blockly.Arduino.valueToCode(a,"LOW",Blockly.Arduino.ORDER_COMMA)||0;a=Blockly.Arduino.valueToCode(a,"HIGH",Blockly.Arduino.ORDER_COMMA)||0;return["map("+b+", "+c+", "+a+")",Blockly.Arduino.ORDER_FUNCTIONAL_CAST]};
Blockly.Arduino.math_random_int=function(a){var b=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_COMMA)||0;a=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_COMMA)||0;return["random("+b+", "+a+")",Blockly.Arduino.ORDER_FUNCTION_CALL]};Blockly.Arduino.math_number=function(a){return[parseFloat(a.getFieldValue("NUM")),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.comparison_operator=function(a){var b=a.getFieldValue("operator"),c="";"NE"==b?c="!=":"EQ"==b?c="==":"LT"==b?c="<":"GT"==b?c=">":"LE"==b?c="<=":"GE"==b&&(c=">=");b="=="==c||"!="==c?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL;var d=Blockly.Arduino.valueToCode(a,"left_param",b);a=Blockly.Arduino.valueToCode(a,"right_param",b);return[d+" "+c+" "+a,b]};
Blockly.Arduino.logical_condition_operator=function(a){var b=a.getFieldValue("operator"),c="OR"==b?Blockly.Arduino.ORDER_LOGICAL_OR:Blockly.Arduino.ORDER_LOGICAL_AND,d=Blockly.Arduino.valueToCode(a,"left_param",c);a=Blockly.Arduino.valueToCode(a,"right_param",c);if("OR"==b)return[d+" || "+a,c];if("AND"==b)return[d+" && "+a,c]};Blockly.Arduino.not_operator=function(a){return["!"+Blockly.Arduino.valueToCode(a,"conditional",Blockly.Arduino.ORDER_UNARY_PREFIX),Blockly.Arduino.ORDER_UNARY_PREFIX]};
Blockly.Arduino.literal_boolean_operator=function(a){return"TRUE"==a.getFieldValue("literal_value")?["true",Blockly.Arduino.ORDER_ATOMIC]:["false",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.math_operator=function(a){var b={ADD:"+",SUB:"-",MULT:"*",DIV:"/"}[a.getFieldValue("OPERATOR")],c="+"==b||"-"==b?Blockly.Arduino.ORDER_ADDITIVE:Blockly.Arduino.ORDER_MULTIPLICATIVE,d=Blockly.Arduino.valueToCode(a,"left_param",c)||"0";a=Blockly.Arduino.valueToCode(a,"right_param",c)||"0";return[d+" "+b+" "+a,c]};Blockly.Arduino.number_operator=function(a){return[a.getFieldValue("num_val"),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.serial_begin=function(a){return"Serial.begin("+{ARG0:"300",ARG1:"600",ARG2:"1200",ARG3:"2400",ARG4:"4800",ARG5:"9600",ARG6:"14400",ARG7:"19200",ARG8:"28800",ARG9:"38400",ARG10:"57600",ARG11:"115200"}[a.getFieldValue("BAUD")]+");\n"};Blockly.Arduino.serial_end=function(a){return"Serial.end();\n"};Blockly.Arduino.serial_print=function(a){return'Serial.print(F("'+a.getFieldValue("PRINT")+'"));\n'};Blockly.Arduiuno={};Blockly.Arduiuno.variables={};Blockly.Arduino.number_variable_get=function(a){return[Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.string_variable_get=Blockly.Arduino.number_variable_get;Blockly.Arduino.bool_variable_get=Blockly.Arduino.number_variable_get;
Blockly.Arduino.number_variable_set=function(a){var b=Blockly.JavaScript.valueToCode(a,"VALUE",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0";return Blockly.JavaScript.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+";\n"};Blockly.Arduino.string_variable_set=Blockly.Arduino.number_variable_set;Blockly.Arduino.bool_variable_set=Blockly.Arduino.number_variable_set;