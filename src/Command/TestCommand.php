<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\ConsoleEvents;
use Symfony\Component\Console\Event\ConsoleErrorEvent;

#[AsCommand(
    name: 'Test',
    description: 'Add a short description for your command',
)]
class TestCommand extends Command
{
    public function __construct(private EntityManagerInterface $systemfdnEntityManager)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {



        try {
            $rsm = new ResultSetMapping();
            $rsm->addScalarResult('id', 'id');
            $rsm->addScalarResult('fecha_creacion', 'id');
            // build rsm here

            $query = $this->systemfdnEntityManager->createNativeQuery("SELECT * FROM encomienda WHERE encomienda.id = '1007611'", $rsm)->getResult();
            // $query->setParameter(1, 'romanb');
            // var_dump(count($query));
            $output->writeln(count($query));
        } catch (\Throwable $e) {
            $event = new ConsoleErrorEvent($input, $output, $e, 'Test');
            $this->dispatcher->dispatch($event, ConsoleEvents::ERROR);
            $e = $event->getError();

            if (0 === $exitCode = $event->getExitCode()) {
                $e = null;
            }
        }
        return Command::SUCCESS;

        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('arg1');

        if ($arg1) {
            $io->note(sprintf('You passed an argument: %s', $arg1));
        }

        if ($input->getOption('option1')) {
            // ...
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
}
