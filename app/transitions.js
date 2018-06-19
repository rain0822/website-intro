export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
  for(var i=0; i< 10; i++) {
    this.transition(
      this.fromRoute(`page${i}`),
      this.toRoute(`page${i+1}`),
      this.use('toLeft', {duration: 700}),
      this.reverse('toRight', {duration: 700})
    );
  }
}
