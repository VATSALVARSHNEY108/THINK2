import os

tree = """
compiler-design/
│
├─ introduction/
│  ├─ introduction-to-compilers.tsx
│  ├─ language-processing-system.tsx
│  ├─ compiler-vs-interpreter.tsx
│  ├─ compiler-vs-assembler.tsx
│  ├─ phases-of-compiler.tsx
│  ├─ structure-of-compiler.tsx
│  ├─ bootstrapping.tsx
│  ├─ cross-compiler.tsx
│  ├─ source-program.tsx
│  ├─ target-program.tsx
│  ├─ error-handling-overview.tsx
│  ├─ grouped-phases.tsx
│  ├─ front-end-vs-back-end.tsx
│  ├─ compiler-construction-tools.tsx
│  ├─ symbol-table-introduction.tsx
│  ├─ lexical-analysis-overview.tsx
│  ├─ syntax-analysis-overview.tsx
│  ├─ semantic-analysis-overview.tsx
│  ├─ intermediate-code-overview.tsx
│  ├─ code-optimization-overview.tsx
│  └─ code-generation-overview.tsx
│
├─ lexical-analysis/
│  ├─ lexical-analyzer.tsx
│  ├─ role-of-lexical-analyzer.tsx
│  ├─ tokens.tsx
│  ├─ lexemes.tsx
│  ├─ patterns.tsx
│  ├─ finite-automata.tsx
│  ├─ deterministic-finite-automata.tsx
│  ├─ nondeterministic-finite-automata.tsx
│  ├─ epsilon-nfa.tsx
│  ├─ regular-expressions.tsx
│  ├─ regular-grammar.tsx
│  ├─ regex-to-nfa.tsx
│  ├─ nfa-to-dfa.tsx
│  ├─ dfa-minimization.tsx
│  ├─ transition-diagrams.tsx
│  ├─ lexical-errors.tsx
│  ├─ input-buffering.tsx
│  ├─ buffering-techniques.tsx
│  ├─ lex-tool.tsx
│  ├─ flex-tool.tsx
│  ├─ token-recognition.tsx
│  ├─ reserved-keywords.tsx
│  ├─ identifiers.tsx
│  ├─ literals.tsx
│  ├─ operators.tsx
│  ├─ delimiters.tsx
│  ├─ comments-handling.tsx
│  ├─ whitespace-handling.tsx
│  ├─ symbol-table-management.tsx
│  └─ lexical-analysis-algorithms.tsx
│
├─ syntax-analysis/
│  ├─ parser-introduction.tsx
│  ├─ context-free-grammar.tsx
│  ├─ derivation.tsx
│  ├─ leftmost-derivation.tsx
│  ├─ rightmost-derivation.tsx
│  ├─ parse-tree.tsx
│  ├─ ambiguity-in-grammar.tsx
│  ├─ ambiguous-grammar.tsx
│  ├─ operator-precedence.tsx
│  ├─ left-recursion.tsx
│  ├─ removing-left-recursion.tsx
│  ├─ left-factoring.tsx
│  ├─ top-down-parsing.tsx
│  ├─ recursive-descent-parser.tsx
│  ├─ predictive-parser.tsx
│  ├─ ll1-parser.tsx
│  ├─ first-and-follow.tsx
│  ├─ parsing-table-construction.tsx
│  ├─ error-recovery-parsing.tsx
│  ├─ bottom-up-parsing.tsx
│  ├─ shift-reduce-parser.tsx
│  ├─ handle-pruning.tsx
│  ├─ operator-precedence-parser.tsx
│  ├─ lr-parser.tsx
│  ├─ slr-parser.tsx
│  ├─ clr-parser.tsx
│  ├─ lalr-parser.tsx
│  ├─ canonical-items.tsx
│  ├─ parser-generator-tools.tsx
│  ├─ yacc-tool.tsx
│  ├─ bison-tool.tsx
│  └─ syntax-directed-translation.tsx
│
├─ semantic-analysis/
│  ├─ semantic-analysis-introduction.tsx
│  ├─ syntax-directed-definition.tsx
│  ├─ syntax-directed-translation.tsx
│  ├─ attributed-grammar.tsx
│  ├─ inherited-attributes.tsx
│  ├─ synthesized-attributes.tsx
│  ├─ dependency-graph.tsx
│  ├─ type-checking.tsx
│  ├─ static-type-checking.tsx
│  ├─ dynamic-type-checking.tsx
│  ├─ type-conversion.tsx
│  ├─ type-coercion.tsx
│  ├─ semantic-errors.tsx
│  ├─ declaration-processing.tsx
│  ├─ scope-management.tsx
│  ├─ nested-scopes.tsx
│  ├─ symbol-table.tsx
│  ├─ symbol-table-implementation.tsx
│  ├─ semantic-rules.tsx
│  ├─ intermediate-representations.tsx
│  ├─ abstract-syntax-tree.tsx
│  ├─ decorated-parse-tree.tsx
│  ├─ storage-allocation.tsx
│  ├─ activation-record.tsx
│  ├─ parameter-passing.tsx
│  ├─ runtime-environment.tsx
│  ├─ heap-management.tsx
│  ├─ stack-management.tsx
│  └─ garbage-collection.tsx
│
├─ intermediate-code-generation/
│  ├─ intermediate-code-introduction.tsx
│  ├─ syntax-tree.tsx
│  ├─ dag-representation.tsx
│  ├─ postfix-notation.tsx
│  ├─ three-address-code.tsx
│  ├─ quadruples.tsx
│  ├─ triples.tsx
│  ├─ indirect-triples.tsx
│  ├─ translation-of-expressions.tsx
│  ├─ boolean-expressions.tsx
│  ├─ control-flow-statements.tsx
│  ├─ switch-case-translation.tsx
│  ├─ loops-translation.tsx
│  ├─ backpatching.tsx
│  ├─ procedure-calls.tsx
│  ├─ parameter-passing-icg.tsx
│  ├─ array-reference-translation.tsx
│  ├─ pointer-translation.tsx
│  ├─ type-conversion-icg.tsx
│  ├─ intermediate-code-optimization.tsx
│  └─ code-generation-preparation.tsx
│
├─ code-optimization/
│  ├─ optimization-introduction.tsx
│  ├─ machine-independent-optimization.tsx
│  ├─ machine-dependent-optimization.tsx
│  ├─ local-optimization.tsx
│  ├─ global-optimization.tsx
│  ├─ peephole-optimization.tsx
│  ├─ common-subexpression-elimination.tsx
│  ├─ dead-code-elimination.tsx
│  ├─ copy-propagation.tsx
│  ├─ constant-propagation.tsx
│  ├─ constant-folding.tsx
│  ├─ loop-optimization.tsx
│  ├─ strength-reduction.tsx
│  ├─ induction-variable-elimination.tsx
│  ├─ code-motion.tsx
│  ├─ unreachable-code-elimination.tsx
│  ├─ algebraic-simplification.tsx
│  ├─ data-flow-analysis.tsx
│  ├─ reaching-definitions.tsx
│  ├─ live-variable-analysis.tsx
│  ├─ available-expressions.tsx
│  ├─ basic-blocks.tsx
│  ├─ flow-graph.tsx
│  ├─ dominators.tsx
│  ├─ register-allocation.tsx
│  ├─ graph-coloring-register-allocation.tsx
│  ├─ instruction-scheduling.tsx
│  ├─ optimization-of-loops.tsx
│  └─ optimization-case-studies.tsx
│
├─ code-generation/
│  ├─ code-generator-introduction.tsx
│  ├─ target-machine.tsx
│  ├─ runtime-memory-management.tsx
│  ├─ storage-organization.tsx
│  ├─ instruction-selection.tsx
│  ├─ register-allocation-codegen.tsx
│  ├─ addressing-modes.tsx
│  ├─ code-emission.tsx
│  ├─ target-code-generation.tsx
│  ├─ stack-machine-code.tsx
│  ├─ assembly-code-generation.tsx
│  ├─ code-generation-for-expressions.tsx
│  ├─ code-generation-for-control-flow.tsx
│  ├─ procedure-call-generation.tsx
│  ├─ parameter-passing-codegen.tsx
│  ├─ activation-record-codegen.tsx
│  ├─ machine-code-optimization.tsx
│  ├─ instruction-cost.tsx
│  ├─ register-descriptor.tsx
│  ├─ address-descriptor.tsx
│  ├─ object-code.tsx
│  ├─ linking-and-loading.tsx
│  ├─ relocation.tsx
│  ├─ static-linking.tsx
│  ├─ dynamic-linking.tsx
│  └─ just-in-time-compilation.tsx
│
├─ runtime-environment/
│  ├─ runtime-environment-introduction.tsx
│  ├─ storage-organization-runtime.tsx
│  ├─ static-allocation.tsx
│  ├─ stack-allocation.tsx
│  ├─ heap-allocation.tsx
│  ├─ activation-tree.tsx
│  ├─ activation-records.tsx
│  ├─ stack-frame.tsx
│  ├─ calling-sequences.tsx
│  ├─ parameter-passing-mechanisms.tsx
│  ├─ dynamic-memory-allocation.tsx
│  ├─ garbage-collection-techniques.tsx
│  ├─ reference-counting.tsx
│  ├─ mark-and-sweep.tsx
│  ├─ copying-garbage-collection.tsx
│  ├─ generational-garbage-collection.tsx
│  ├─ exception-handling-runtime.tsx
│  ├─ runtime-error-handling.tsx
│  └─ runtime-support-system.tsx
│
├─ compiler-construction-tools/
│  ├─ lex-introduction.tsx
│  ├─ flex-introduction.tsx
│  ├─ yacc-introduction.tsx
│  ├─ bison-introduction.tsx
│  ├─ parser-generators.tsx
│  ├─ scanner-generators.tsx
│  ├─ syntax-tree-generators.tsx
│  ├─ compiler-debugging-tools.tsx
│  ├─ llvm-introduction.tsx
│  ├─ gcc-architecture.tsx
│  ├─ clang-overview.tsx
│  ├─ intermediate-representation-tools.tsx
│  ├─ build-automation.tsx
│  └─ compiler-testing.tsx
│
├─ advanced-topics/
│  ├─ jit-compilation.tsx
│  ├─ bytecode-compilation.tsx
│  ├─ virtual-machines.tsx
│  ├─ llvm-ir.tsx
│  ├─ static-single-assignment.tsx
│  ├─ parallelizing-compilers.tsx
│  ├─ vectorization.tsx
│  ├─ speculative-optimization.tsx
│  ├─ profile-guided-optimization.tsx
│  ├─ interprocedural-optimization.tsx
│  ├─ compiler-security.tsx
│  ├─ sandboxing.tsx
│  ├─ incremental-compilation.tsx
│  ├─ cross-compilation.tsx
│  ├─ transpilers.tsx
│  ├─ domain-specific-languages.tsx
│  ├─ functional-language-compilers.tsx
│  ├─ object-oriented-language-compilers.tsx
│  ├─ garbage-collected-languages.tsx
│  └─ ai-assisted-compilation.tsx
│
├─ practical-labs/
│  ├─ implement-lexical-analyzer.tsx
│  ├─ implement-dfa.tsx
│  ├─ regex-to-nfa-lab.tsx
│  ├─ first-follow-program.tsx
│  ├─ recursive-descent-parser-lab.tsx
│  ├─ ll1-parser-program.tsx
│  ├─ shift-reduce-parser-lab.tsx
│  ├─ slr-parser-program.tsx
│  ├─ symbol-table-implementation-lab.tsx
│  ├─ intermediate-code-generation-lab.tsx
│  ├─ three-address-code-lab.tsx
│  ├─ code-optimization-lab.tsx
│  ├─ peephole-optimization-lab.tsx
│  ├─ register-allocation-lab.tsx
│  ├─ yacc-parser-lab.tsx
│  ├─ lex-programs.tsx
│  ├─ mini-compiler-project.tsx
│  ├─ syntax-tree-construction.tsx
│  ├─ semantic-analysis-lab.tsx
│  └─ compiler-project-architecture.tsx
│
└─ interview-prep/
   ├─ phases-of-compiler-interview.tsx
   ├─ compiler-vs-interpreter-interview.tsx
   ├─ lexical-analysis-interview.tsx
   ├─ regex-vs-cfg.tsx
   ├─ first-vs-follow.tsx
   ├─ top-down-vs-bottom-up-parsing.tsx
   ├─ ll1-vs-lr-parser.tsx
   ├─ ambiguity-in-grammar-interview.tsx
   ├─ left-recursion-vs-left-factoring.tsx
   ├─ symbol-table-interview.tsx
   ├─ syntax-directed-translation-interview.tsx
   ├─ intermediate-code-interview.tsx
   ├─ three-address-code-interview.tsx
   ├─ code-optimization-interview.tsx
   ├─ machine-independent-vs-machine-dependent.tsx
   ├─ register-allocation-interview.tsx
   ├─ garbage-collection-interview.tsx
   ├─ runtime-environment-interview.tsx
   ├─ activation-record-interview.tsx
   └─ parser-types-interview.tsx
"""

base_dir = r"c:\Users\VATSAL VARSHNEY\OneDrive\Desktop\O(1)\content\compiler-design"
os.makedirs(base_dir, exist_ok=True)

template = '''"use client";

import React from "react";
import {{ TheorySection }} from "../../../components/TheorySection";

export default function {COMPONENT}() {{
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      <TheorySection 
        title="{TITLE}"
        definition="This section covers {TITLE}."
        timeComplexity="O(1)"
        spaceComplexity="O(1)"
        keyPoints={{["Key Point 1", "Key Point 2"]}}
      />
    </div>
  );
}}
'''

def to_camel(s):
    s = s.replace('.tsx', '')
    return ''.join(w.capitalize() for w in s.replace('-', ' ').split())

current_folder = ""
created_count = 0
for line in tree.strip().split('\n'):
    line = line.strip()
    if not line or line == '│' or line.startswith('==') or line.startswith('Folder') or line.startswith('──') or line.startswith('TOTAL') or line.startswith('SUMMARY') or line.startswith('compiler-design'):
        continue
    
    # folder
    if line.startswith('├─ ') or line.startswith('└─ '):
        name = line[3:].strip()
        if name.endswith('/'):
            current_folder = name[:-1]
            os.makedirs(os.path.join(base_dir, current_folder), exist_ok=True)
    elif '├─ ' in line or '└─ ' in line:
        # file
        filename = line.split('─ ')[-1].strip()
        if filename.endswith('.tsx'):
            comp_name = to_camel(filename)
            title = filename.replace('.tsx', '').replace('-', ' ').title()
            path = os.path.join(base_dir, current_folder, filename)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(template.format(COMPONENT=comp_name, TITLE=title))
            created_count += 1

print(f"Successfully created {created_count} files in {base_dir}")
